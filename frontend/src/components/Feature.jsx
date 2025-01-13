import React from 'react'
import { IoLogoFirebase } from "react-icons/io5";
import { Feature_Data } from '../data/Feature_Data';
import SingleFeature from './Single/SingleFeature';
import Sliders from './Sliders';


const Feature = () => {
  return (
    <>
    <div className="container mx-auto text-center">
        <div className="d-flex gap-2 my-3 justify-content-center align-items-center">
            <IoLogoFirebase/>
            <h6 className="m-0 text-secondary text-uppercase">Useful Feature</h6>
        </div>
            <h3 className="my-2">
                <span className="fw-bold">
                    Everything you need
                </span>               
                to start your next project
            </h3>
            <p className="text-secondary my-4">
                Not just a set of tools, the package includes ready-to-deploy conceptual application.
            </p>
            <div className="row">
            {Feature_Data?.map((items,index)=>{
                return <SingleFeature key={index} {...items} />
            })}
            </div>
    </div>


        <div className="container-fluid height-full my-5 bg-light">
            <Sliders/>
        </div>

    
    </>
  )
}

export default Feature