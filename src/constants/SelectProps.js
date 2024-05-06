import {
  ExperienceConstants,
  MinBaseSalaryConstants,
  NumberOfEmployeesConstants,
  OfficeSettingConstants,
  RolesConstants,
  TechStacks,
} from './DropDownConstants';

export const SelectProps = [
  {
    title: 'Roles',
    dropDownData: RolesConstants,
    multiSelect: true,
    type: FilterConstants.ROLES_CONSTANTS,
  },
  {
    title: 'Number of Employees',
    dropDownData: NumberOfEmployeesConstants,
    multiSelect: true,
    type: FilterConstants.NUMBEROFEMPLOYEES_CONSTANTS,
  },
  {
    title: 'Experience',
    dropDownData: ExperienceConstants,
    multiSelect: false,
    type: FilterConstants.EXPERIENCE_CONSTANTS,
  },
  {
    title: 'Remote',
    dropDownData: OfficeSettingConstants,
    multiSelect: false,
    type: FilterConstants.JOBSETTING_CONSTANTS,
  },
  {
    title: 'Tech Stack',
    dropDownData: TechStacks,
    multiSelect: false,
    type: FilterConstants.TECHSTACK_CONSTANTS,
  },
  {
    title: 'Minimum Base Pay Salary',
    dropDownData: MinBaseSalaryConstants,
    multiSelect: false,
    type: FilterConstants.MINIMUMBASEPAYSALARY_CONSTANTS,
  },
];
