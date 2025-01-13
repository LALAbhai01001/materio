import React from 'react'

const SinglePage = ({id,title,icon,pages}) => {
return (
    <>
    <ul className="m-0 list-unstyled z-index">
        <li className='d-flex gap-2 align-items-center'>
            <span className=' p-2 rounded-3 bg-light text-center text-purple'>{icon} </span> <span className='fw-semibold'>{title}</span> 
        </li>
        <>
            {pages?.map((items,index)=>{
                return <li className='my-2'>{items.title}</li>
            })}
        </>
    </ul>
    </>
    )
}

export default SinglePage