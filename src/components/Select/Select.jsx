import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import './Select.css';
import DropDown from '../HOC/DropDown/DropDown';

const Select = ({ title, dropDownData, multiSelect }) => {
  const [selectfield, setSelectField] = useState('');
  const [selectedValue, setSelectedValue] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

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
    <div className={`Select ${title === 'Roles' ? 'SpecialSelect' : ''}`}>
      <div
        className={`${
          title === 'Roles' ? 'SpecialSelect__SelectBox' : 'Select__SelectBox'
        }`}
      >
        <div className='SelectBox__Title'>
          {selectedValue.length === 0 ? (
            title
          ) : multiSelect ? (
            <div className='Title__MultiSelect'>
              {selectedValue.map((value) => (
                <div className='MultiSelect__Pill'>
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
          {title === 'Roles'
            ? dropDownData.map((data, i) => (
                <div className='Dropdown__RolesData'>
                  <div className='Dropdown__RolesTitle'>
                    {Object.keys(data)[0]}
                  </div>
                  {data[Object.keys(data)[0]].map((role) => (
                    <div
                      key={role}
                      className='Dropdown__Roles'
                      onClick={() => selectRoles(Object.keys(data)[0], role)}
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
                  {title === 'Number of Employees'
                    ? data[1]
                      ? data[0] + '-' + data[1]
                      : data[0] + '+'
                    : title === 'Minimum Base Pay Salary'
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
