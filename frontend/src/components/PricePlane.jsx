import React from 'react'
import { IoLogoFirebase } from 'react-icons/io5';
import { PricePlaneData } from '../data/PricePlane_data';
import { SinglePricePlane } from './Single/SinglePricePlane';

const PricePlane = () => {
  return (
    <>
      <div className="container-fluid py-3 text-center my-3 bg-light">
        <div className="d-flex my-3 gap-2 justify-content-center align-items-center">
          <IoLogoFirebase />
          <h6 className="m-0 text-secondary text-uppercase">Pricing Plans</h6>
        </div>
        <h3 className="my-2">
          <span className="fw-bold">Tailored pricing plans</span>
          designed for you
        </h3>
        <p className="text-secondary my-4">
          All plans include 40+ advanced tools and features to boost your
          product. Choose the best plan to fit your needs.
        </p>

        <div className="col-11 mx-auto">

        <div className="row">
        {PricePlaneData?.map((items,index)=>{
          return <SinglePricePlane key={index} {...items} />
        })}
        </div>
        </div>
        
        
      </div>
    </>
  );
}

export default PricePlane