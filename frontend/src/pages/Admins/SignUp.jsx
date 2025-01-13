import React, { useEffect, useState } from 'react'
import SignUpSide from "../../components/SignUp/SignUpSide";
import SignUpRightSide from "../../components/SignUp/SignUpRightSide";
import Logo from "../../components/home/Logo";
import Button from "../../components/Button";

const SignUp = () => {

  const [size, setSize] = useState(window.innerWidth);
  
  const handleChangeNew = ()=>{
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize' , handleChangeNew)


    return(()=>{
      window.removeEventListener('resize', handleChangeNew)
    })
    
  })
  
  
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
              {size >= 999 && <SignUpSide />}
            </div>
            <div className="col-lg-4 col-md-6 card shadow border-0 text-center">
              <div className="p-3">
                {size <= 999 && <Logo/>}
              </div>
              
              <SignUpRightSide />

              <Button/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp