import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../../actions';
import { FilterConstants } from '../../constants/StateConstants';
import DropDown from '../HOC/DropDown/DropDown';
import './Select.css';

const Select = ({ title, dropDownData, multiSelect, type }) => {
  const [selectfield, setSelectField] = useState('');
  const [selectedValue, setSelectedValue] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue(type, selectedValue));
  }, [selectedValue]);

  const selectData = (data) => {
    if (multiSelect) {
      setSelectedValue([...selectedValue, data]);
    } else {
      setSelectedValue([data]);
    }
    setDropDownOpen(false);
  };

  const deleteOneOption = (option) => {
    setSelectedValue(selectedValue.filter((value) => value !== option));
  };

  const selectRoles = (field, role) => {
    if (selectfield === field) setSelectedValue([...selectedValue, role]);
    else {
      setSelectField(field);
      setSelectedValue([role]);
    }
    setDropDownOpen(false);
  };

  return (
    <div
      className={`Select ${
        type === FilterConstants.ROLES_CONSTANTS ? 'SpecialSelect' : ''
      }`}
    >
      <div
        className={`${
          type === FilterConstants.ROLES_CONSTANTS
            ? 'SpecialSelect__SelectBox'
            : 'Select__SelectBox'
        }`}
      >
        <div className='SelectBox__Title'>
          {selectedValue.length === 0 ? (
            title
          ) : multiSelect ? (
            <div className='Title__MultiSelect'>
              {selectedValue.map((value) => (
                <div key={value} className='MultiSelect__Pill'>
                  <div>{value}</div>
                  <ClearIcon onClick={() => deleteOneOption(value)} />
                </div>
              ))}
            </div>
          ) : (
            selectedValue[0]
          )}
        </div>
        {selectedValue.length > 0 && (
          <div className='SelectBox__Cross'>
            <ClearIcon onClick={() => setSelectedValue([])} />
          </div>
        )}
        <div className='SelectBox__Divider'>|</div>
        <div
          className='SelectBox__Arrow'
          onClick={() => setDropDownOpen((e) => !e)}
        >
          <ExpandMoreIcon />
        </div>
      </div>
      {dropDownOpen && (
        <DropDown>
          {type === FilterConstants.ROLES_CONSTANTS
            ? dropDownData.map((data, i) => (
                <div key={i} className='Dropdown__RolesData'>
                  <div className='Dropdown__RolesTitle'>
                    {Object.keys(data)[0]}
                  </div>
                  {data[Object.keys(data)[0]].map((role) => (
                    <div
                      key={role}
                      className='Dropdown__Roles'
                      onClick={() =>
                        selectRoles(Object.keys(data)[0], role.toLowerCase())
                      }
                    >
                      {role}
                    </div>
                  ))}
                </div>
              ))
            : dropDownData.map((data, i) => (
                <div
                  key={i}
                  className='Dropdown__DropDownData'
                  onClick={() => selectData(data)}
                >
                  {type === FilterConstants.NUMBEROFEMPLOYEES_CONSTANTS
                    ? data[1]
                      ? data[0] + '-' + data[1]
                      : data[0] + '+'
                    : type === FilterConstants.MINIMUMBASEPAYSALARY_CONSTANTS
                    ? `${data}LPA`
                    : data}
                </div>
              ))}
        </DropDown>
      )}
    </div>
  );
};

export default Select;
