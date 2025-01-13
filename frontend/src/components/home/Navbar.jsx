import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { HiOutlineViewList } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { IoIosArrowDown } from "react-icons/io";
import { PagesData } from "../../data/Pages";
import SinglePage from "../Single/SinglePage";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false)
  const [dark, setDark] = useState(false)
  const [light , setLight] = useState(false)
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeNew = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleChangeNew);

    return () => {
      window.removeEventListener("resize", handleChangeNew);
    };
  });

  const handleLight = ()=>{
    setLight(true)
    console.log('salam')
  }
  
  

  return (
    <>
      {size < 1185 && (
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      )}
      <div className="container">
        <nav>
          <div className="d-flex justify-content-between bg-white shadow py-2 px-3 rounded-3 align-items-center">
            <div className="d-flex gap-2 justify-content-center align-items-center">
              {size < 1185 && (
                <HiOutlineViewList
                  size={25}
                  onClick={() => setOpenSidebar(true)}
                  className="cursor-pointer"
                />
              )}
              <Logo />
            </div>
            {size > 1185 && (
              <ul className="m-0 list-unstyled d-flex gap-3 align-items-center">
                <li>
                  <Link to="/" className="text-decoration-none text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feature"
                    className="text-decoration-none text-black"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-decoration-none text-black">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-decoration-none text-black">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-decoration-none text-black"
                  >
                    Contact Us
                  </Link>
                </li>
                <div
                  className="dropdwn position-relative"
                  onClick={toggleDropdown}
                >
                  <li
                    className="cursor-pointer"
                    onClick={() => setScroll((prevScroll) => !prevScroll)}
                  >
                    Page {scroll ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </li>
                </div>

                <li className="cursor-pointer">Admin</li>
              </ul>
            )}
            <div className="d-flex gap-3 justify-content-center align-items-center">
              {/* {dark ? <BsMoonStars/> : } */}

              <FiSun
                size={20}
                className="position-relative cursor-pointer"
                onClick={() => setDark((prev) => !prev)}
              />

              <Button variant="contained" startIcon={<IoCartOutline />}>
                {size > 1185 && " Purchase now"}
              </Button>
            </div>
          </div>
        </nav>

        {dark && (
          <div
            className="darklight shadow card position-absolute p-3"
            style={{
              right: "20%",
            }}
          >
            <ul className="list-unstyled m-0">
              <li className="d-flex gap-3 align-items-center cursor-pointer ">
                <FiSun size={20} />
                <span>Light</span>
              </li>
              <li className="d-flex gap-3 align-items-center cursor-pointer">
                <BsMoonStars onClick={handleLight} size={20} />
                <span>Dark</span>
              </li>
            </ul>
          </div>
        )}
        {size > 1185 && isOpen && (
          <div
            className="dropdwn-menu position-absolute z-index col-9 my-2 card shadow border-0 rounded-2"
            style={{ right: "10%" }}
          >
            <div className="row p-3">
              {PagesData?.map((items, index) => {
                return (
                  <div className="col-md-3">
                    <SinglePage key={index} {...items} />
                  </div>
                );
              })}

              <div className="col-3 p-3">
                <img
                  src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/dropdown-image-light.png"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
