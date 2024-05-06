import React, { useEffect } from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className='JobCard'>
      <div className='JobCard__JobPostTime'>⌛ Posted 10 days ago</div>

      <div className='JobCard__FirstSection'>
        <div>
          <img src={job.logoUrl} alt='job-logo' width={40} height={60} />
        </div>
        <div className='FirstSection__Details'>
          <div>
            <a
              href={job.jdLink}
              target='_blank'
              style={{ textDecoration: 'none' }}
            >
              <span className='Details__Title'>{job.companyName}</span>
            </a>
          </div>
          <div>
            <span className='Details__Role'>
              {/* changed job role to all uppercase for abbreviation */}
              {(job.jobRole + ' Engineer').toUpperCase()}
            </span>
          </div>
          <div>
            {/* changed location to all uppercase for abbreviation */}
            <span className='Details__Location'>
              {job.location.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className='JobCard__SalarySection'>
        Estimated Salary: {job.salaryCurrencyCode === 'USD' ? '$' : '₹'}
        {job.minJdSalary && <span>{job.minJdSalary} - </span>}
        <span>{job.maxJdSalary}</span>K ✅
      </div>

      <div className='JobCard__AboutCompany'>
        <div className='AboutCompany__CompanyDetails'>
          <div className='CompanyDetails__AboutCompany'>About Company:</div>
          <div className='CompanyDetails__AboutUs'>About us</div>
          <div className='CompanyDetails__JobDetails'>
            {job.jobDetailsFromCompany}
          </div>
        </div>
        <div className='curtain'></div>
      </div>

      <div className='JobCard__ViewJob'>
        <a href={job.jdLink} target='_blank' className='ViewJob__Link'>
          View Job
        </a>
      </div>

      <div className='JobCard__MinimumExperienceSection'>
        <div className='MinimumExperienceSection__Title'>
          {/* if minimum experience is given then show this */}
          {job.minExp ? 'Minimum Experience' : ''}
        </div>
        <div className='MinimumExperienceSection__Experience'>
          {job.minExp ? `${job.minExp} years` : ''}
        </div>
      </div>

      <div className='JobCard__ButtonSection'>
        <button className='ButtonSection__EasyApply'>⚡ Easy Apply</button>
        <button className='ButtonSection__UnlockReferralAsks'>
          {/* took random images from internet for this part */}
          <img
            src='https://m.media-amazon.com/images/I/51esjzGFHPL._AC_UF1000,1000_QL80_DpWeblab_.jpg'
            alt='referral_image_1'
            className='UnlockReferralAsks__ReferralImage'
          />
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzXzCgMZQLM-SbuBN3IkrV_fCYV67Lw9hO7qXo_Yieg&s'
            alt='referral_image_2'
            className='UnlockReferralAsks__ReferralImage'
          />
          <div>Unlock referral asks</div>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
