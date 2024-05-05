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
      />
      <Select
        title={'Number of Employees'}
        dropDownData={NumberOfEmployeesConstants}
        multiSelect={true}
      />
      <Select
        title={'Experience'}
        dropDownData={ExperienceConstants}
        multiSelect={false}
      />
      <Select
        title={'Remote'}
        dropDownData={OfficeSettingConstants}
        multiSelect={false}
      />
      <Select
        title={'Tech Stack'}
        dropDownData={TechStacks}
        multiSelect={false}
      />
      <Select
        title={'Minimum Base Pay Salary'}
        dropDownData={MinBaseSalaryConstants}
        multiSelect={false}
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
