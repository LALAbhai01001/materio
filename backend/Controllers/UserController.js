const handler = require("express-async-handler");
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const JWT = require("jsonwebtoken");

// random generate otp function 

const generateOtp = () => {
  const randomNum = Math.random() * 1000000;
  const floorNum = Math.floor(randomNum);
  return floorNum.toString().padStart(6, "0");
};
const otp = generateOtp();

// register user function

const reguser = handler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the feilds");
  }

  const founduser = await UserModel.findOne({
    email,
  });

  if (founduser) {
    res.status(401);
    throw new Error("this email already exist");
  }

  const hashedpass = await bcrypt.hash(password, 10);

  const createuser = await UserModel.create({
    username,
    email,
    password: hashedpass,
    otp,
  });

  const id = createuser?._id;

  // send the otp to the mail

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "OTP Verification",
    html: `<!DOCTYPE html>
<html lang="en"> 
<head> 
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${otp}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f9;">
  <table width="100%" cellspacing="0" cellpadding="0" align="center" style="background-color: #f4f4f9; padding: 20px 0;">
    <tr>
      <td align="center">
        <!-- Card Container -->
        <table width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
          <!-- Header Section -->
          <tr>
            <td align="center" style="padding: 20px; background-color: #4CAF50; border-radius: 8px 8px 0 0; color: #ffffff;">
              <h1 style="font-size: 24px; margin: 0;">${otp}</h1>
            </td>
          </tr>
          <!-- Body Section -->
          <tr>
            <td align="center" style="padding: 20px;">
              <p style="font-size: 16px; color: #333; margin: 0 0 20px;">Hi ${username} Your OTP Code:</p>
              <p style="font-size: 16px; color: #333; margin: 0 0 20px;">Please use the OTP below to verify your account:</p>
              <div style="font-size: 36px; font-weight: bold; color: #4CAF50; background-color: #eafbea; padding: 10px 20px; border-radius: 8px; display: inline-block; letter-spacing: 5px;">
                ${otp}
              </div>
              <br/>
              <a href="http://localhost:3000/user/otp/${id}" style="cursor: pointer;" >
              <button
              style="
              background-color: #28a745; 
              color: white; 
              padding: 10px 20px; 
              border: none; 
              border-radius: 5px; 
              font-size: 16px; 
              cursor: pointer;
              margin-top: 8px;" 
              >
              Verify Now
              </button>
              </a>
              <p style="font-size: 14px; color: #666; margin: 20px 0 0;">This OTP is valid for 60 Seconds. Please do not share it with anyone.</p>
            </td>
          </tr>
          <!-- Footer Section -->
          <tr>
            <td align="center" style="padding: 10px; background-color: #f4f4f9; border-top: 1px solid #eaeaea;">
              <p style="font-size: 12px; color: #999; margin: 0;">If you didn’t request this, you can safely ignore this email.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw new Error(error.message);
    } else {
      console.log("mail send successfuly");
    }
  });

  res.send({
    _id: createuser._id,
    username: createuser.username,
    email: createuser.email,
    otp: createuser.otp, 
    token: generatetoken(createuser._id),
  });
});



// login user function


const loginuser = handler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter all the feilds");
  }

  const finduser = await UserModel.findOne({
    email,
  });

  if (!finduser) {
    res.status(404);
    throw new Error("Invalid Email");
  }

  if (finduser) {
    if (await bcrypt.compare(password, finduser.password)) {
      res.send({
        _id: finduser._id,
        username: finduser.username,
        email: finduser.email,
        token: generatetoken(finduser._id),
      });
    } else {
      res.status(404);
      throw new Error("Invalid Password");
    }
  }
});


// verify user otp 


const verifyOTP = handler(async (req, res) => {
  const user_id = req.user._id
  const { otp } = req.body;

  // find user

  const findUser = await UserModel.findById(user_id);

  if (!findUser) {
    res.status(404);
    throw new Error("user not found");
  }

  if (findUser) {
    if (findUser.otp == otp) {
      findUser.otp = null;
      findUser.save();
      res.send(findUser);
    } else {
      res.status(401);
      throw new Error("Invalid OTP");
    }
  }
});


// create a JWT token


const generatetoken = (id) => {
  return JWT.sign({ id }, process.env.JSON_SECRET, {
    expiresIn: "15d",
  });
};

module.exports = {
  reguser,
  loginuser,
  verifyOTP,
};
