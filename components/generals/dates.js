import React, { useState, useEffect } from "react";
import { FormControl, TextField } from '@mui/material';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import 'dayjs/locale/es';

const clases ='col-md-6 col-lg-6 col-sm-6'
const style = {
  fontSize: '26px'
};
const DatePickers = ({type, id, value, placheH, handleChange, requerido}) => {
    const [name, setName] = useState(value);
    const handleChangeInput = (newValue) => {
      setName(newValue);
      handleChange({id:id, value: newValue})
    };
    
    useEffect(() => {setName(value)}, [value])

 return (
      <FormControl className={clases} style={{ margin: '8px', fontSize: 16}} sx={style}>
          <LocalizationProvider  dateAdapter={AdapterDayjs} adapterLocale={'es'}>
      <Stack spacing={3}>
        <DesktopDatePicker
          mask={"__/__/____"}
          label= {placheH}
          id={id}
          name={id}
          value={name}
          onChange={handleChangeInput}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
      </FormControl>
      )

}

export default DatePickers;