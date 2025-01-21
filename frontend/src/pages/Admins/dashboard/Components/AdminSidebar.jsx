import React, { useState } from 'react'
import Logo from '../../../../components/home/Logo'
import { FaDotCircle } from "react-icons/fa";
import { AdminSidebarData } from '../Data/AdminSidebarData';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {


  const [open, setOpen] = useState();
  
  const handleClick = (id)=>{

      setOpen(open === id ? null : id)
      // console.log(id)
    
  }
  
  
  return (
    <>
      <div className="height-full overflow-y-scroll col-10">
        <div className="p-3 d-flex justify-content-between align-items-center">
          <Logo />
          <FaDotCircle />
        </div>

        <ul className="list-unstyled  d-flex flex-column gap-2 justify-content-center">
          {AdminSidebarData?.map((items, index) => {
            return (
              <>
                {items?.name !== "" && (
                  <li
                    key={index}
                    className="d-flex align-items-center gap-2 justify-content-center"
                  >
                    <div
                      className="left-line"
                      style={{
                        width: "20%",
                        height: "1px",
                        backgroundColor: "lightgray",
                      }}
                    ></div>
                    <p className="text-secondary m-0 text-sm">{items?.name}</p>
                    <div
                      className="left-line"
                      style={{
                        width: "20%",
                        height: "1px",
                        backgroundColor: "lightgray",
                      }}
                    ></div>
                  </li>
                )}

                {/* Nested list */}

                {items?.list?.map((items2, index2) => {
                  const isOpen = open === items2?.id; 
                  return (
                    <>
                      <li
                        onClick={() => handleClick(items2?.id)}
                        key={index2}
                        className="d-flex li-hover rounded-end-pill py-2 px-3 align-items-center gap-2"
                      >
                        <div className="d-flex w-100 justify-content-between align-items-center">
                          <div className="d-flex align-items-center gap-2">
                            <span className="fw-bold fs-5 m-0">
                              {items2?.icon}
                            </span>
                            <span className="m-0">
                            {items2?.title}
                            </span>
                          </div>
                          {items2?.expandable ? isOpen ? (
                            <IoIosArrowDown size={18} />
                          ) : (
                            <MdOutlineKeyboardArrowRight size={22} />
                          ) : ''}
                        </div>
                      </li>

                      {isOpen &&
                        items2?.sublist?.map((items3, index3) => {
                          return (
                            <>
                              <li
                                key={index3}
                                className="d-flex li-hover rounded-end-pill align-items-center gap-2 py-2 px-3"
                              >
                                {items3?.subtitle}
                              </li>
                            </>
                          );
                        })}
                    </>
                  );
                })}
                
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar