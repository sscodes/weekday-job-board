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
            <span className='Details__Role'>{(job.jobRole+' Engineer').toUpperCase()}</span>
          </div>
          <div>
            <span className='Details__Location'>{job.location.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div className='JobCard__SalarySection'>
        Estimated Salary: ₹{' '}
        {job.minJdSalary && (
          <span>{Math.round((job.minJdSalary * 83.31) / 10000)} - </span>
        )}
        <span>{Math.round((job.maxJdSalary * 83.31) / 10000)}</span> LPA ✅
      </div>

      <div className='JobCard__AboutCompany'>
        <div className='AboutCompany__CompanyDetails'>
          <div className='CompanyDetails__AboutCompany'>About Company:</div>
          <div className='CompanyDetails__AboutUs'>About us</div>
          <div className='CompanyDetails__JobDetails'>
            {job.jobDetailsFromCompany}
          </div>
        </div>
        <div className='AboutCompany__FounderDetails'>
          <div className='FounderDetails__Title'>
            Founder/Recruiter profiles:
          </div>
          <div className='FounderDetails__AboutFounder'>John Doe</div>
        </div>
        <div className='AboutCompany__AboutRole'>
          <div className='AboutRole__Title'>About Role:</div>
          <div className='AboutRole__Overview'>Overview</div>
          <div className='AboutRole__Description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error
            tempore odio impedit, exercitationem alias fugit temporibus magnam
            nisi, at, necessitatibus minima vitae ratione soluta! Doloremque
            inventore voluptates rem voluptatum!
          </div>
        </div>
        <div className='curtain'></div>
      </div>

      {job.minExp && (
        <div className='JobCard__MinimumExperienceSection'>
          <div className='MinimumExperienceSection__Title'>
            Minimum Experience
          </div>
          <div className='MinimumExperienceSection__Experience'>
            {job.minExp} years
          </div>
        </div>
      )}

      <div className='JobCard__ButtonSection'>
        <button className='ButtonSection__EasyApply'>⚡ Easy Apply</button>
        <button className='ButtonSection__UnlockReferralAsks'>
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
