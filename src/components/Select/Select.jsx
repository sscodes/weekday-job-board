import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import './Select.css';
import DropDown from '../HOC/DropDown/DropDown';

const Select = ({ title, dropDownData, multiSelect = false }) => {
  const [selectedValue, setSelectedValue] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className={`Select ${title==='Roles' ? 'SpecialSelect' : ''}`}>
      <div className={`${title==='Roles' ? 'SpecialSelect__SelectBox' : 'Select__SelectBox'}`}>
        <div className='SelectBox__Title'>{title}</div>
        {selectedValue.length > 0 && (
          <div className='SelectBox__Cross'>
            <ClearIcon />
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
                  <div className='Dropdown__RolesTitle'>{Object.keys(data)[0]}</div>
                  {data[Object.keys(data)[0]].map((role) => (
                    <div key={role} className='Dropdown__Roles'>{role}</div>
                  ))}
                </div>
              ))
            : dropDownData.map((data, i) => (
                <div key={i} className='Dropdown__DropDownData'>
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
