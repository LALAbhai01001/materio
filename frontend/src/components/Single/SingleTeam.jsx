import React from "react";

const SingleTeam = ({ id, img, bg, name, title, f_icon, t_icon, l_icon,colour }) => {
  return (
    <>
      <div
        className="col-lg-3  mx-auto img_cd"
        style={{
          height: "300px",
        }}
      >
        <div className="card">

        <div
          className="card border-0 d-flex img-show-parent justify-content-center align-items-center"
          style={{
              height: "190px", background:`${colour}`
            }}
            >
          <img
            width={190}
            height={190}
            src={img}
            alt=""
            className="img-show"
            />
        </div>

        <div className="title_bar my-2 d-flex justify-content-center align-items-center flex-column">
          <h5>{name}</h5>
          <p className="text-secondary m-0">{title}</p>

          <div className="d-flex justify-contet-center fs-4 gap-2 align-items-center">
            <p className="m-0">{f_icon}</p>
            <p className="m-0">{t_icon}</p>
            <p className="m-0">{l_icon}</p>
          </div>
        </div>
            </div>
      </div>
    </>
  );
};

export default SingleTeam;
