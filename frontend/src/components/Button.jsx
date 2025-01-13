import React from 'react';

const Button = () => {
  return (
    <>
      <button
        className="btn btn-primary position-fixed px-4 py-2 fs-5 z-index shadow animated-gradient-btn"
        style={{
          right: "4rem",
          bottom: "2.5rem",
        }}
      >
        <span className="fw-semibold">Buy Now</span>
      </button>
    </>
  );
}

export default Button