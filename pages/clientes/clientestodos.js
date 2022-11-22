import React, {  useState, useEffect } from "react";
import axios from 'axios'
import { InsertsOrUpdate } from "../../functions/generalFunctions"
import DataGridWithFilters from "../../components/tables/DataGridWithFilters"
import InsertAndUpdate from "../../components/forms/InsertAndUpdate"
import { Button, Stack, IconButton } from '@mui/material';
import Title from '../../components/generals/title'
import { CLIENT, FORM_CLIENT } from '../../constants/form'
import { TIPOS_CLIENTES } from '../../constants/nomenclados'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Edit from '@mui/icons-material/Edit';
import Check from '@mui/icons-material/Check';
import Cancel from '@mui/icons-material/Cancel';
import Swal from 'sweetalert2'

function Usuariostodos() {
    const [value, setValue] = useState(CLIENT)
    const [rows, setRows] = useState([])
    useEffect(() => {
        handleGetters()
    }, [])

    const confirmPopUp = async () => {
      Swal.fire({
        icon: 'success',
        title: 'Cambio Exitoso',
        showCancelButton: false,
        confirmButtonText: 'Confirmar',
        confirmButtonColor: "#26a69a"
      }).then((result) => {
        if (result.isConfirmed) {
          handleGetters()
        }
      })
  
      handleGetters()
    }
    
    const [options, setOptions] = useState({
      Type:TIPOS_CLIENTES
    })

    const handleGetters = async () => {
        await axios.get('/api/clientes/allClient').then(res => {
            if(res.status === 200){
                var rowsR = []
                res.data?.users.map((item) => {
                  rowsR.push({ 
                    id: item.Id,
                    Name: item.Name,
                    LastName: item.LastName,
                    DNI: item.DNI,
                    Type: item.Type,
                    Active: item.Active.data[0]
                })
            })
            setRows(rowsR)
            }
          })
    }

      const columns = [
        { field: 'Name', headerName: 'Nombre', flex: 0.2 },
        { field: 'LastName', headerName: 'Apellido', flex: 0.2 },
         { field: 'Type', headerName: 'Tipo', flex: 0.2,
         renderCell: (rows) => {
          return (
            <Stack direction="row" spacing={2} >
              {rows.row.Type == 0 ? "Persona" : rows.row.Type == 1 ? "Gestor" : "Empresa"}
            </Stack>
          );
        },},
        {
          field: 'Active',
          headerName: 'Activo',
          sortable: false,
          flex: 0.15,
          renderCell: (rows) => {
            return (
              <Stack direction="row" spacing={2} >
                {rows.row.Active ? "Si" : "No"}
              </Stack>
            );
          },
        },
        {
          field: 'Acciones',
          headerName: 'Acciones',
          sortable: false,
          flex: 0.15,
          minWidth: 50,
          disableClickEventBubbling: true,
          renderCell: (rows) => {
            const onClick = (e) => {
              var params = {
                data: {
                  id: rows.row.id,
                  Active: rows.row.Active
                },
                url: '/api/clientes/activeClient',
              }
               handleActive(params)
            };
    
            const onClickEdit = (e) => {
              setValue({
                id: rows.row.id,
                Name: rows.row.Name,
                LastName: rows.row.LastName,
                DNI: rows.row.DNI,
                Type: rows.row.Type,
                Active: rows.row.Active
              })
            };
    
            return (
              <Stack direction="row" spacing={1} >
                   <IconButton aria-label="Edit" color="warning" size="large" onClick={onClickEdit}>
                  <Edit  style={{ fontSize: '20px' }} />
                </IconButton>
    
                <IconButton aria-label="Check" color={rows.row.Active ? "error" : "primary"} style={{ fontSize: '20px' }} onClick={onClick} size="large">
                 {!rows.row.Active?  <Check style={{ fontSize: '20px' }} /> :  <Cancel style={{ fontSize: '20px' }} />}
                </IconButton>
           </Stack>
            );
          },
        },
      ]

    const Update = async () => {    
      Swal.fire({
      title: 'Desea Editar',
      text: `Desea editar el tasa ${value.Name}`,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      confirmButtonColor: "#26a69a"
    }).then((result) => {
      if (result.isConfirmed) {
        handleUpdate()
      }
    })
  }

    const Insert = async () => {
      Swal.fire({
        title: 'Desea Agregar',
        text: `Desea agregar el usuario ${value.Name}`,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Confirmar',
        confirmButtonColor: "#26a69a"
      }).then((result) => {
        if (result.isConfirmed) {
          handleInsert()
        }
      })
    }


    const handleActive = async (params) => {
      await InsertsOrUpdate(params)
      await handleGetters()
      await confirmPopUp()
    }
  
    const handleInsert = async () => {
      var data = {
        Name: value.Name,
        LastName: value.LastName,
        DNI: value.DNI,
        Type: value.Type,
        Active: value.Active
      }
      var params = {
        data: data,
        url: '/api/clientes/insertClient',
      }
      
      await InsertsOrUpdate(params)
      await handleGetters()
      await setValue(CLIENT)
      await confirmPopUp()
    }
  
    const handleUpdate = async () => {
      var data = {
        Id: value.id,
        Name: value.Name,
        LastName: value.LastName,
        DNI: value.DNI,
        Type: value.Type,
        Active: value.Active
      }
      var params = {
        data: data,
        url: '/api/clientes/updateClient',
      }
      await InsertsOrUpdate(params)
      await handleGetters()
      await setValue(CLIENT)
      await confirmPopUp()
    }
  
    const handleCancel = () => {
      setValue(CLIENT)
    }


  return (
    <div>
    <Title titulo='Clientes'/>
        <InsertAndUpdate title={'Agregar Clientes'} options={options} constForm={FORM_CLIENT} value={value} setValue={setValue} handleUpdate={Update} handleCancel={handleCancel} handleInsert={Insert} />
        <DataGridWithFilters title={'Clientes'} columns={columns} rows={rows} pageSize={10} rowsPerPageOptions={[10]} />
    </div>
  )
}

export default Usuariostodos