import React, { useState } from "react";
import { Button, Box, Stack } from '@mui/material';
import { useForm } from 'react-hook-form'
import TextFields from '../generals/textField'
import Checks from '../generals/check'
import Selects from '../generals/select'
import DatePickers from '../generals/dates'
import moment from 'moment';

const Busqueda = ({ title, value, ocultar, setOcultar,setValue, handleCancel, handleBucar, constForm, options }) => {
  const { handleSubmit } = useForm({
    // mode: 'all',
    // reValidateMode: 'onChange',
  })
  const handleChangeSelect = e => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
      handleBucar()
  }

  const handleChangeInput = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleChangeInputDate = (event) => {
    var now = moment(event.value).format("yyyy/MM/DD");
    setValue({ ...value, [event.id]: now});
  };


  const handleChangeCheck = (event) => {
    if(event.target.name== 'CtaCte' || event.target.name== 'PagoPendiente'){
      setOcultar(!event.target.checked)
    }

    setValue({
      ...value,
      [event.target.name]: event.target.checked,
    });
  };

  return (
      <div style={{ marginBottom: '10px', marginTop: '20px', height: `180px` }}>
        <h3>{title}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        { 
            constForm.map((item, index) => {
              let ver = item.hide && ocultar ? true : false
              if(!ver){
              if (item.type === 'input') {
                return <TextFields value={value[item.id]} type={item.tipo} row={item.row} key={index + item.id} hide={item.hide} handleChange={handleChangeInput} requerido={item.requerido} clase={item.clase} title={item.title} id={item.id} placheH={item.placheH} />
              } else if (item.type === 'select') {
                return <Selects value={value[item.id]} width={item.width} key={index + item.id} handleChange={handleChangeSelect} hide={item.hide} requerido={item.requerido} clase={item.clase} title={item.title} id={item.id} options={options[item.id]} />
              }else if (item.type === 'select2') {
                return <Selects value={value[item.id]} key={index + item.id} handleChange={handleChangeSelect} hide={item.hide && ocultar ? true : false} requerido={item.requerido} clase={item.clase} title={item.title} id={item.id} options={options[item.id]} />
              } else if (item.type === 'linea') {
                return <div key={index} className={item.clase}><br /></div>
              } else if (item.type === 'check') {
                return <Checks title={item.title}  tamanio={item.tamanio} key={index + item.id} checked={value[item.id]} handleChange={handleChangeCheck} titulo={item.title} id={item.id} />
              } else if (item.type === 'Date') {
                return <DatePickers value={value[item.id]} type={item.tipo} row={item.row} key={index + item.id} hide={item.hide} handleChange={handleChangeInputDate} requerido={item.requerido} clase={item.clase} title={item.title} id={item.id} placheH={item.placheH} />
              }
            }
            })
          }
               <Box sx={{ '& button': { m: 1 } }}>
            <div className="col-md-12" style={{textAlignLast: 'center' }}>

              <Button variant="contained" style={{ fontSize: '12px' }} size="large" type='submit'>
                    Buscar
                  </Button>
        
            </div>
          </Box>
        </form>
      </div>
  );
}

export default Busqueda;