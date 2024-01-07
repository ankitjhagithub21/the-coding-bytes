import React from 'react'
import Box from '../../components/Box/Box'
import jobs from './data'
const Jobs = () => {
  return (
    <section>
    <div className="container px-5 py-24 mx-auto min-h-screen">
    <h1 className="text-4xl font-bold mb-10 text-center">Recent Jobs</h1>
      <div className="flex flex-wrap -m-4">
       {
        jobs.map((job)=>{
          return <Box key={job.id} data={job}/>
        })
       }
       
      </div>
    </div>
  </section>
  
  )
}

export default Jobs