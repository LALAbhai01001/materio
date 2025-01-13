import { Button } from '@mui/material';
import React, { useState } from 'react'

const Hero = () => {

  const [move, setMove] = useState({
    img1: {x:0, y:0},
    img2: {x:0, y:0},
  })
  
  const {img1,img2} = move;

  const handlemove = (e)=>{
    const {clientX, clientY} = e;

    setMove({
      img1: {x:clientX * -0.02, y:clientY * -0.02},
      img2: {x:clientX * -0.04, y:clientY * -0.03},
    })

  }
  
  
  

  
  return (
    <>
      <div
        onMouseMove={handlemove}
        className="container text-center position-relative"
      >
        <h2 className="my-3 text-center text-purple">
          All in one sass application <br /> for your business
        </h2>
        <p className="text-center my-3">
          No coding required to make customizations. The live customizer has{" "}
          <br />
          everything your marketing need.
        </p>

        <Button className="mx-auto d-block" variant="contained">
          Get Early Acess
        </Button>
        <div className="img-parent height-full">
          <img
            src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/hero-dashboard-light.png"
            alt="front-img1"
            width="70%"
            className="position-absolute"
            style={{
              left: "15%",
              transform: `translate(${img1.x}px , ${img1.y}px)`,
            }}
          />

          <img
            src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/hero-elements-light.png"
            alt="front-img2"
            width="85%"
            className="position-absolute"
            style={{
              left: "8%",
              transform: `translate(${img2.x}px , ${img2.y}px)`,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Hero