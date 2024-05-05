import React, { useState } from 'react';
import Select from '../Select/Select';
import {
  ExperienceConstants,
  MinBaseSalaryConstants,
  NumberOfEmployeesConstants,
  OfficeSettingConstants,
  RolesConstants,
  TechStacks,
} from '../Constants/DropDownConstants';

const Filters = () => {
  const [roles, setRoles] = useState();
  const [numberOfEmployees, setNumberOfEmployees] = useState();
  const [experience, setExperience] = useState();
  const [remote, setRemote] = useState();
  const [techStack, setTechStack] = useState();
  const [minimumBasePaySalary, setMinimumBasePaySalary] = useState();

  return (
    <div className='Filters'>
      <Select
        title={'Roles'}
        dropDownData={RolesConstants}
        multiSelect={true}
      />
      <Select
        title={'Number of Employees'}
        dropDownData={NumberOfEmployeesConstants}
        multiSelect={true}
      />
      <Select title={'Experience'} dropDownData={ExperienceConstants} />
      <Select title={'Remote'} dropDownData={OfficeSettingConstants} />
      <Select title={'Tech Stack'} dropDownData={TechStacks} />
      <Select
        title={'Minimum Base Pay Salary'}
        dropDownData={MinBaseSalaryConstants}
      />
      <input
        type='text'
        placeholder='Search Company Name'
        className='Filters__SearchFilter'
      />
    </div>
  );
};

export default Filters;
