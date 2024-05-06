import { FilterConstants } from '../constants/StateConstants';

const inistate = {
  roles: [],
  numberOfEmployees: [],
  experience: [],
  remote: [],
  techStack: [],
  minimumBasePaySalary: [],
  searchedData: '',
};

const filterReducer = (state = inistate, action) => {
  switch (action.type) {
    case FilterConstants.ROLES_CONSTANTS:
      return {
        ...state,
        roles: action.payload,
      };
    case FilterConstants.NUMBEROFEMPLOYEES_CONSTANTS:
      return {
        ...state,
        numberOfEmployees: action.payload,
      };
    case FilterConstants.EXPERIENCE_CONSTANTS:
      return {
        ...state,
        experience: action.payload,
      };
    case FilterConstants.JOBSETTING_CONSTANTS:
      return {
        ...state,
        remote: action.payload,
      };
    case FilterConstants.TECHSTACK_CONSTANTS:
      return {
        ...state,
        techStack: action.payload,
      };
    case FilterConstants.MINIMUMBASEPAYSALARY_CONSTANTS:
      return {
        ...state,
        minimumBasePaySalary: action.payload,
      };
    case FilterConstants.SEARCHEDDATA_CONSTANTS:
      return {
        ...state,
        searchedData: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
