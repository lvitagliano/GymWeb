import React, { useState, useEffect } from "react";
import { FormControl, TextField } from '@mui/material';

const clases ='col-md-6 col-lg-6 col-sm-6'
const style = {
  fontSize: '26px'
};
const TextFields = ({type, id, value='', placheH, handleChange, requerido}) => {

    const [name, setName] = useState(value);
    const handleChangeInput = (event) => {
      setName(event.target.value);
      handleChange(event)
    };
    
    useEffect(() => {setName(value)}, [value])

 return (
      <FormControl className={clases} style={{ margin: '8px', fontSize: 16}} sx={style}>
          <TextField
                disabled={false}
                label={placheH}
                InputLabelProps={{ shrink: true }}
                required={requerido}
                id={id}
                name={id}
                type={type}
                value={name}
                onChange={handleChangeInput}
              />
      </FormControl>
      )

}

export default TextFields;