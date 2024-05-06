import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard/JobCard';
import Filters from '../components/Filters/Filters';
import { useSelector } from 'react-redux';

const SearchJobs = () => {
  const [limit, setLimit] = useState(9);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Geting the state datas
  const roles = useSelector((state) => state.FilterReducer.roles);
  const remote = useSelector((state) => state.FilterReducer.remote);
  const minimumBasePaySalary = useSelector(
    (state) => state.FilterReducer.minimumBasePaySalary
  );
  const searchedData = useSelector((state) => state.FilterReducer.searchedData);
  const minimumExperience = useSelector((state) => state.FilterReducer.experience);

  // Fetching data
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(
      'https://api.weekday.technology/adhoc/getSampleJdJSON',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          limit: limit,
          offset: 0,
        }),
      },
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jdList);
        setLoading(false);
      })
      .catch((error) => console.error(error));

    // clean up function using AbortController to abort data fetch when component is unmounted
    return () => controller.abort();
  }, [limit]);

  // Checking if we have hit the bottom of the page
  const handleScrolledToBottom = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setLimit((e) => e + 10);
      setLoading(true);
    }
  };

  // Applied infinite scroll logic checking for scrolling events
  useEffect(() => {
    window.addEventListener('scroll', handleScrolledToBottom);

    return () => window.removeEventListener('scroll', handleScrolledToBottom);
  }, []);

  // updating data as per roles filter
  useEffect(() => {
    if (roles?.length > 0) {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter((job) =>
        roles.includes(job.jobRole.toLowerCase())
      );
      setFilteredJobs(tempJobs);
    } else setFilteredJobs([]);
  }, [roles]);

  // updating data as per remote filter
  useEffect(() => {
    if (remote?.length > 0 && remote[0].toLowerCase() === 'remote') {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter((job) => job.location === 'remote');
      setFilteredJobs(tempJobs);
    } else setFilteredJobs([]);
  }, [remote]);

  // updating data as per minimumExperience filter
  useEffect(() => {
    if (minimumExperience?.length > 0) {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter(
        (job) => job.minExp >= minimumExperience
      );
      setFilteredJobs(tempJobs);
    } else setFilteredJobs([]);
  }, [minimumExperience]);

  // updating data as per minimumBasePaySalary filter
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
        {/* checking if any search is applied and result is not found */}
        {filteredJobs?.length === 0 && searchedData?.length > 0 ? (
          <div className='SearchJobsSection__NoJobsFound'>
            <h1>No Such Company found</h1>
          </div>
        ) : (
          <div className='SearchJobsSection__JobsListing'>
            {/* checking if any filter or search is applied else show original data */}
            {filteredJobs.length > 0
              ? filteredJobs.map((job) => <JobCard key={job.jdUid} job={job} />)
              : jobs.length > 0
              ? jobs.map((job) => <JobCard key={job.jdUid} job={job} />)
              : [...Array(9)].map((_, i) => (
                  // added skeleton for page load
                  <div key={i} className='skeleton animate-pulse'></div>
                ))}
          </div>
        )}
      </div>
      {/* added loading state for infinite scroll */}
      {loading && <div className='Loading'>Loading...</div>}
    </div>
  );
};

export default SearchJobs;
