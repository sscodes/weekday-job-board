import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../actions';
import { SelectProps } from '../../constants/SelectProps';
import { FilterConstants } from '../../constants/StateConstants';
import Select from '../Select/Select';

const Filters = () => {
  const searchedData = useSelector((state) => state.searchedData);
  const dispatch = useDispatch();

  return (
    <div className='Filters'>
      {SelectProps.map((select) => (
        <Select
          title={select.title}
          dropDownData={select.dropDownData}
          multiSelect={select.multiSelect}
          type={select.type}
          key={select.type}
        />
      ))}
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
