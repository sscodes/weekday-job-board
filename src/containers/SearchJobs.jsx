import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard/JobCard';
import Filters from '../components/Filters/Filters';

const SearchJobs = () => {
  const [limit, setLimit] = useState(9);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        limit: limit,
        offset: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => setJobs(data.jdList))
      .catch((error) => console.error(error));

    return () => controller.abort();
  }, [limit]);

  const handleScrolledToBottom = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight
    )
      setLimit((e) => e + 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolledToBottom);

    return () => window.removeEventListener('scroll', handleScrolledToBottom);
  }, []);

  return (
    <div id='container'>
      <Filters />
      <div className='SearchJobsSection'>
        <div className='SearchJobsSection__JobsListing'>
          {jobs.length > 0 &&
            jobs.map((job) => <JobCard key={job.jdUid} job={job} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchJobs;
