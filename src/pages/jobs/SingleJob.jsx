import React, { useEffect, useState } from 'react';
import jobs from './data';
import { useParams } from 'react-router-dom';
import SinglePageCompo from '../../components/SinglePageCompo/SinglePageCompo';
import RecentJob from '../../components/RecentJob/RecentJob';

const SingleJob = () => {
  const { id } = useParams();
  const [currJob, setCurrJob] = useState(null);

  useEffect(() => {
    const job = jobs.find((job) => job.id == id);
    setCurrJob(job);
  }, [id]);

  return (
    <section className='py-24 container mx-auto flex flex-wrap'>
      <div className='p-4 lg:w-3/4 w-full'>
        {currJob ? (
          <>
            <h1 className='text-3xl font-bold border-b-2 mb-5'>{currJob.title}</h1>

            {currJob && <SinglePageCompo data={currJob} />}

            <div className='text-center'>
              <a
                className='px-4 py-2 lg:w-fit text-xl bg-indigo-500 text-white font-bold hover:text-yellow-500 rounded-md'
                href={currJob.apply}
                target='_blank'
                rel='noopener noreferrer' // Add rel attribute for security
              >
                Apply Now
              </a>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className='lg:w-1/4 w-full p-4'>
        <h1 className='text-center font-bold text-xl'>Recent Jobs</h1>
        {jobs.map((job) => (
          <RecentJob key={job.id} data={job} />
        ))}
      </div>
    </section>
  );
};

export default SingleJob;
