import React from 'react'
import Logo from '../home/Logo'

const SignUpSide = () => {
  return (
    <>
      <Logo />

      <img
        src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/illustrations/auth/v2-register-light.png"
        alt=""
        width="100%" style={{
            marginLeft:'5rem'
        }}
      />

      <img
        src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/illustrations/objects/tree-3.png"
        alt="" width='15%' style={{
            position:'absolute', left:'1rem', bottom:'1rem'
        }}
      />
    </>
  );
}

export default SignUpSide