import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard/JobCard';
import Filters from '../components/Filters/Filters';

const SearchJobs = () => {
  const [limit, setLimit] = useState(9);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [roles, setRoles] = useState([]);
  const [numberOfEmployees, setNumberOfEmployees] = useState([]);
  const [experience, setExperience] = useState([]);
  const [remote, setRemote] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [minimumBasePaySalary, setMinimumBasePaySalary] = useState([]);
  const [searchedData, setSearchedData] = useState('');

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
    if (roles.length > 0) {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter((job) =>
        roles.includes(job.jobRole.toLowerCase())
      );
      setFilteredJobs(tempJobs);
    } else setFilteredJobs([]);
  }, [roles]);

  useEffect(() => {
    if (remote[0]?.toLowerCase() === 'remote') {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter((job) => job.location === 'remote');
      setFilteredJobs(tempJobs);
    }
  }, [remote]);

  useEffect(() => {
    if (minimumBasePaySalary[0]) {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter(
        (job) => job.minJdSalary >= minimumBasePaySalary
      );
      setFilteredJobs(tempJobs);
    }
  }, [minimumBasePaySalary]);

  useEffect(() => {
    if (searchedData.length > 0) {
      let tempJobs = [...jobs];
      tempJobs = tempJobs.filter((job) =>
        job.companyName.toLowerCase().includes(searchedData.toLowerCase())
      );
      setFilteredJobs(tempJobs);
    } else setFilteredJobs([]);
  }, [searchedData]);

  return (
    <div id='container'>
      <Filters
        roles={roles}
        setRoles={setRoles}
        numberOfEmployees={numberOfEmployees}
        setNumberOfEmployees={setNumberOfEmployees}
        experience={experience}
        setExperience={setExperience}
        remote={remote}
        setRemote={setRemote}
        techStack={techStack}
        setTechStack={setTechStack}
        minimumBasePaySalary={minimumBasePaySalary}
        setMinimumBasePaySalary={setMinimumBasePaySalary}
        searchedData={searchedData}
        setSearchedData={setSearchedData}
      />
      <div className='SearchJobsSection'>
        {filteredJobs.length === 0 && searchedData.length > 0 ? (
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
