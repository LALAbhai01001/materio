import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { PagesData } from "../../data/Pages";
import SinglePage from "../Single/SinglePage";
import { IoIosArrowUp } from "react-icons/io";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={() => setOpenSidebar(false)}
        className={`underlay container-fluid ${
          openSidebar ? "opacity-1" : "translate-nx-100 opacity-0"
        } transtion-fast  height-full position-fixed z-index top-0 start-0 w-100`}
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`col-12 ${
            openSidebar ? "opacity-1" : "translate-nx-100 opacity-0"
          } ${
            scroll && "overflow-y-scroll"
          } col-sm-4 height-full z-index position-fixed top-0 start-0 bg-white`}
        >
          <IoClose
            size={25}
            className="cursor-pointer position-absolute"
            style={{
              top: "10px",
              right: "10px",
            }}
            onClick={() => setOpenSidebar(false)}
          />

          <ul className="m-0 p-4 d-flex flex-column jusitfy-content-start list-unstyled gap-3 align-items-start">
            <li>Home</li>
            <li>Features</li>
            <li>Team</li>
            <li>FAQ</li>
            <li>Contact us</li>
            <div className="dropdwn position-relative" onClick={toggleDropdown}>
              <li onClick={() => setScroll((prevScroll) => !prevScroll)}>
                Page {scroll ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </li>
            </div>

            {isOpen && (
              <div className="dropdwm-menu w-100">
                <li>
                  {PagesData?.map((items, index) => {
                    return (
                      <li>
                        <SinglePage key={index} {...items} />
                      </li>
                    );
                  })}
                </li>
              </div>
            )}

            <li>Admin</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
