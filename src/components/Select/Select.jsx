import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import './Select.css';
import DropDown from '../HOC/DropDown/DropDown';

const Select = ({ title, dropDownData = [1,2,3,4,5,6,7,8,9,10] }) => {
  const [selectedValue, setSelectedValue] = useState([]);

  return (
    <div className='Select'>
      <div className='Select__SelectBox'>
        <div className='SelectBox__Title'>{title}</div>
        {selectedValue.length > 0 && (
          <div className='SelectBox__Cross'>
            <ClearIcon />
          </div>
        )}
        <div className='SelectBox__Divider'>|</div>
        <div className='SelectBox__Arrow'>
          <ExpandMoreIcon />
        </div>
      </div>
      <DropDown>
        {dropDownData.map((data) => (
          <div key={data} className='Dropdown__DropDownData'>{data}</div>
        ))}
      </DropDown>
    </div>
  );
};

export default Select;
