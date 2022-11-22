import React, { useState, useEffect } from "react";
import { FormControl, FormControlLabel, Checkbox } from '@mui/material';

const clases ='col-md-6 col-lg-6 col-sm-6'
const style = {
  fontSize: '26px'
};
const Checks = ({handleChange, id, checked, title}) => {
  const [name, setName] = React.useState(checked);
  const handleChangeInput = (event) => {
    setName(event.target.checked);
    handleChange(event)
  };

  useEffect(() => {setName(checked)}, [checked])

 return (
      <FormControl style={{ margin: '8px', fontSize:`20px` }}>
      <FormControlLabel 
      style={{fontSize:`20px`}}
      sx={{ '& .MuiTypography-root': { fontSize:`20px`} }} 
      control={<Checkbox 
        name={id} 
        id={id}
        checked={checked} 
        onChange={handleChangeInput} 
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>} 
      label={title} 
      />
    </FormControl>
      )

}

export default Checks;