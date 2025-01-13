import React, { useEffect, useState } from 'react'
import Logo from '../home/Logo'

const LoginLeftSide = () => {

    
    
  return (
    <>
        <Logo />

      <img
        src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/illustrations/auth/v2-login-light.png"
        alt=""
        width="90%"
        style={{
          marginLeft: "5rem",
        }}
      />

      <img
        src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/illustrations/objects/tree-2.png"
        alt=""
        width="12%"
        style={{
          position: "absolute",
          left: "10px",
          bottom: "10px",
        }}
      />
    </>
  );
}

export default LoginLeftSide