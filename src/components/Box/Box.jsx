import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Box = ({data}) => {
    const {id,title,details} = data
    const navigate = useNavigate()
   
    return (
        <div className="md:w-1/2 w-full lg:w-1/4">
            <div className="p-4">

                <div className='border-2 rounded-lg '>
                    <div className='p-2 min-h-36'>
                        <h2 className='font-bold text-lg'>
                           {title}
                        </h2>
                       
                        <div className='flex  flex-wrap gap-2 mt-2'>
                            {
                                details.map((box, index) => {
                                    return <div key={index} className='border-2 px-2 rounded-lg '>{box}</div>
                                })
                            }
                        </div>
                    </div>
                    <button className='bg-indigo-500  text-white w-full rounded-b-lg flex items-center justify-center gap-1 font-bold py-2 hover:text-yellow-500' onClick={()=>navigate(`${id}`)}><IoMdAdd /> View Details</button>
                </div>

            </div>
        </div>
    )
}
    
export default Box
