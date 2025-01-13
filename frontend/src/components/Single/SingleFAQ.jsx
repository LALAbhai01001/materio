import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SingleFAQ = ({ id, p_head, p_body }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card border-0 shadow my-3 p-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0">{p_head}</p>
          
        <p
          className="cursor-pointer m-0"
          onClick={() => setOpen
            ((prevOpen) => !prevOpen)}
            >
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </p>
            </div>
        {open && p_body}
      </div>
      {/* <IoIosArrowUp />  */}
    </>
  );
};

export default SingleFAQ;
