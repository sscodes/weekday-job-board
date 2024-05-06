import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard/JobCard';
import Filters from '../components/Filters/Filters';
import { useSelector } from 'react-redux';

const SearchJobs = () => {
  const [limit, setLimit] = useState(9);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const roles = useSelector((state) => state.FilterReducer.roles);
  const remote = useSelector((state) => state.FilterReducer.remote);
  const minimumBasePaySalary = useSelector(
    (state) => state.FilterReducer.minimumBasePaySalary
  );
  const searchedData = useSelector((state) => state.FilterReducer.searchedData);

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
      .then((data) => {
        setJobs(data.jdList);
        setLoading(false);
      })
      .catch((error) => console.error(error));

    return () => controller.abort();
  }, [limit]);

  const handleScrolledToBottom = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setLimit((e) => e + 10);
      setLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolledToBottom);

    return () => window.removeEventListener('scroll', handleScrolledToBottom);
  }, []);

  useEffect(() => {
    if (roles?.length > 0) {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter((job) =>
        roles.includes(job.jobRole.toLowerCase())
      );
      setFilteredJobs(tempJobs);
    } else setFilteredJobs([]);
  }, [roles]);

  useEffect(() => {
    if (remote?.length > 0 && remote[0].toLowerCase() === 'remote') {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter((job) => job.location === 'remote');
      setFilteredJobs(tempJobs);
    } else setFilteredJobs([]);
  }, [remote]);

  useEffect(() => {
    if (minimumBasePaySalary?.length > 0) {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter(
        (job) => job.minJdSalary >= minimumBasePaySalary
      );
      setFilteredJobs(tempJobs);
    } else setFilteredJobs([]);
  }, [minimumBasePaySalary]);

  useEffect(() => {
    if (searchedData?.length > 0) {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter((job) =>
        job.companyName.toLowerCase().includes(searchedData.toLowerCase())
      );
      setFilteredJobs(tempJobs);
    } else setFilteredJobs([]);
  }, [searchedData]);

  return (
    <div id='container'>
      <Filters />
      <div className='SearchJobsSection'>
        {filteredJobs?.length === 0 && searchedData?.length > 0 ? (
          <div className='SearchJobsSection__NoJobsFound'>
            <h1>No Such Company found</h1>
          </div>
        ) : (
          <div className='SearchJobsSection__JobsListing'>
            {filteredJobs.length > 0
              ? filteredJobs.map((job) => <JobCard key={job.jdUid} job={job} />)
              : jobs.length > 0 &&
                jobs.map((job) => <JobCard key={job.jdUid} job={job} />)}
          </div>
        )}
      </div>

      {loading && <div className='Loading'>Loading...</div>}
    </div>
  );
};

export default SearchJobs;
