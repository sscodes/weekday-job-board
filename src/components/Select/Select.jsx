import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import './Select.css';

const Select = ({ title }) => {
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
    </div>
  );
};

export default Select;
