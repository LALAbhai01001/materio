import React from 'react'

const SingleFeature = ({id,icon,title,desc}) => {
  return (
    <>
    <div className="col-lg-4">
        <div className="card border-0 my-4">
            
            <div className="rounded-circle d-flex justify-content-center align-items-center mx-auto my-2 border-purple" style={{height:'80px', width
                : '80px'
            }}>

            <p className='text-purple m-0 fw-bold text-lg'>{icon}</p>
            </div>

            <h5 className="m-0">
                {title}
            </h5>
             <p className="m-0 text-secondary">
                {desc}
             </p>
        </div>
    </div>
    </>
  )
}

export default SingleFeature