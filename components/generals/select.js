import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const clases ='col-md-6 col-lg-6 col-sm-6'
const style = {
  fontSize: '26px'
};
const Selects = ({ title, id, value, width= '200px', options, handleChange, hide}) => {
  const [selectVal, setSelectVal] = useState('')
  const handleChangeSelect = e => {
    setSelectVal(e.target.value)

    handleChange(e)
  }

  useEffect(() => {setSelectVal(value)}, [value])
  
 return (
  
  <FormControl className={clases} required={true} style={{ margin: '8px', width:width}}>
  <InputLabel style={{ fontSize: '16px' }} id="type">{title}</InputLabel>
  <Select
          labelId={id}
          disabled={hide}
          id={id}
          name={id}
          value={selectVal}
          label={title}
          onChange={handleChangeSelect}
          style={{ fontSize: '16px' }}
        >
            {options.map(item => (
              <MenuItem style={{ fontSize: '16px' }} key={item.value} value={item.value}>
                {item.description}
              </MenuItem>
            ))}
        </Select>
    </FormControl>
      )

}

export default Selects;