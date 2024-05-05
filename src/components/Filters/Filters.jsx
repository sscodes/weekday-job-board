import React, { useState } from 'react';
import Select from '../Select/Select';
import {
  ExperienceConstants,
  MinBaseSalaryConstants,
  NumberOfEmployeesConstants,
  OfficeSettingConstants,
  RolesConstants,
  TechStacks,
} from '../../constants/DropDownConstants';

const Filters = (props) => {
  return (
    <div className='Filters'>
      <Select
        title={'Roles'}
        dropDownData={RolesConstants}
        multiSelect={true}
        setValue={props.setRoles}
      />
      <Select
        title={'Number of Employees'}
        dropDownData={NumberOfEmployeesConstants}
        multiSelect={true}
        setValue={props.setNumberOfEmployees}
      />
      <Select
        title={'Experience'}
        dropDownData={ExperienceConstants}
        multiSelect={false}
        setValue={props.setExperience}
      />
      <Select
        title={'Remote'}
        dropDownData={OfficeSettingConstants}
        multiSelect={false}
        setValue={props.setRemote}
      />
      <Select
        title={'Tech Stack'}
        dropDownData={TechStacks}
        multiSelect={false}
        setValue={props.setTechStack}
      />
      <Select
        title={'Minimum Base Pay Salary'}
        dropDownData={MinBaseSalaryConstants}
        multiSelect={false}
        setValue={props.setMinimumBasePaySalary}
      />
      <input
        type='text'
        placeholder='Search Company Name'
        className='Filters__SearchFilter'
        value={props.searchedData}
        onChange={(e) => props.setSearchedData(e.target.value)}
      />
    </div>
  );
};

export default Filters;
