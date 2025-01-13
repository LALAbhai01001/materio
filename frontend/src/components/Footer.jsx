import React from 'react'
import Logo from './home/Logo';

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid w-100 bg-img-footer "
        style={{
          marginTop: "25px",
        }}
      >
        <footer className="col-11 text-white mx-auto py-5">
          <div className="row">
            <div className="col-lg-5">
              <Logo />

              <p className="text-secondary my-4">
                Most Powerful & Comprehensive 🤩 React NextJS Admin Template
                with Elegant Material Design & Unique Layouts.
              </p>

              <form action="">
                <div className="d-flex gap-2">
                  <input
                    type="text"
                    placeholder="Subscribe to newsleter"
                    className="form-control w-50"
                  />
                  <button className="btn bg-purple text-white">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-6">
              <ul className="list-unstyled cursor-pointer text-light d-flex gap-3 flex-column justify-content-center">
                <li className="fw-semibold">Pages</li>
                <li>Pricing</li>
                <li>Payment</li>
                <li>Maintenance</li>
                <li>Coming Soon</li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-6">
              <ul className="list-unstyled cursor-pointer text-light d-flex gap-3 flex-column justify-content-center">
                <li className="fw-semibold">Products</li>
                <li>Page builder</li>
                <li>Admin Dashboards</li>
                <li>UK Kits</li>
                <li>Illustrations </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4">
              <p className="fw-bold">Download our App</p>

              <div
                className="d-flex gap-3 p-2 rounded-4"
                style={{
                  backgroundColor: "#211B2C",
                }}
              >
                <img
                  src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/apple-icon.png"
                  alt="apple store"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col items-start">
                  <p className="m-0">Download on the</p>
                  <p className="m-0">App Store</p>
                </div>
              </div>

              <div
                className="d-flex gap-3 p-2 rounded-4 my-3"
                style={{
                  backgroundColor: "#211B2C",
                }}
              >
                <img
                  src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/google-play-icon.png"
                  alt="apple store"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col items-start">
                  <p className="m-0">Download on the</p>
                  <p className="m-0">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer