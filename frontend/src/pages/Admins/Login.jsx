import React, { useEffect, useState } from "react";
import LoginRightSide from "../../components/Login/LoginRightSide";
import LoginLeftSide from "../../components/Login/LoginLeftSide";
import Logo from "../../components/home/Logo";
import Button from "../../components/Button";

const Login = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleChangeNew = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleChangeNew);

    return () => {
      window.removeEventListener("resize", handleChangeNew);
    };
  });

  return (
    <>
      <div className="container-fluid height-full overflow-y-hidden">
        <div className=" mx-auto">
          <div className="row">
            <div
              className="col-lg-8 col-md-6"
              style={{
                backgroundColor: "#ECEDF3",
              }}
            >
              {size >= 999 && <LoginLeftSide />}
            </div>
            <div className="col-lg-4 col-md-6 card shadow text-center border-0 ">
              <div className="p-3">{size <= 999 && <Logo />}</div>

              <LoginRightSide />

              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
