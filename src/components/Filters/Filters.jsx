import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../actions';
import {
  ExperienceConstants,
  MinBaseSalaryConstants,
  NumberOfEmployeesConstants,
  OfficeSettingConstants,
  RolesConstants,
  TechStacks,
} from '../../constants/DropDownConstants';
import { FilterConstants } from '../../constants/StateConstants';
import Select from '../Select/Select';

const Filters = () => {
  const searchedData = useSelector((state) => state.searchedData);
  const dispatch = useDispatch();
  return (
    <div className='Filters'>
      <Select
        title={'Roles'}
        dropDownData={RolesConstants}
        multiSelect={true}
        type={FilterConstants.ROLES_CONSTANTS}
      />
      <Select
        title={'Number of Employees'}
        dropDownData={NumberOfEmployeesConstants}
        multiSelect={true}
        type={FilterConstants.NUMBEROFEMPLOYEES_CONSTANTS}
      />
      <Select
        title={'Experience'}
        dropDownData={ExperienceConstants}
        multiSelect={false}
        type={FilterConstants.EXPERIENCE_CONSTANTS}
      />
      <Select
        title={'Remote'}
        dropDownData={OfficeSettingConstants}
        multiSelect={false}
        type={FilterConstants.JOBSETTING_CONSTANTS}
      />
      <Select
        title={'Tech Stack'}
        dropDownData={TechStacks}
        multiSelect={false}
        type={FilterConstants.TECHSTACK_CONSTANTS}
      />
      <Select
        title={'Minimum Base Pay Salary'}
        dropDownData={MinBaseSalaryConstants}
        multiSelect={false}
        type={FilterConstants.MINIMUMBASEPAYSALARY_CONSTANTS}
      />
      <input
        type='text'
        placeholder='Search Company Name'
        className='Filters__SearchFilter'
        value={searchedData}
        onChange={(e) =>
          dispatch(
            setValue(FilterConstants.SEARCHEDDATA_CONSTANTS, e.target.value)
          )
        }
      />
    </div>
  );
};

export default Filters;
