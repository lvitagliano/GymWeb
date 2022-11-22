import React, { useState, useEffect } from "react";
import axios from 'axios'
import { InsertsOrUpdate } from "../../functions/generalFunctions"
import DataGridWithFilters from "../../components/tables/DataGridWithFilters"
import InsertAndUpdate from "../../components/forms/InsertAndUpdate"
import { Button, Stack, IconButton } from '@mui/material';
import Title from '../../components/generals/title'
import { TRAMITE, FORM_TRAMITE } from '../../constants/form'
import { TIPOS_TRAMITES, TIPOS_PAGO } from '../../constants/nomenclados'
import Edit from '@mui/icons-material/Edit';
import Check from '@mui/icons-material/Check';
import Cancel from '@mui/icons-material/Cancel';
import Swal from 'sweetalert2'
import moment from 'moment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Typography, Grid, Box, Modal } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Tooltip from '@mui/material/Tooltip';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  flexGrow: 1
};

function Tramitestodos() {
  const [ocultar, setOcultar] = useState(true)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(TRAMITE)
  const [valueModal, setValueModal] = useState(TRAMITE)
  const [rows, setRows] = useState([])
  const [rowsClients, setRowsClients] = useState([])
  const [options, setOptions] = useState({
    Tipo: TIPOS_TRAMITES,
    TipoPago: TIPOS_PAGO,
    Cliente: rowsClients
  })

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

  const handleGetters = async () => {
    await axios.get('/api/tramites/allTramite').then(res => {
      if (res.status === 200) {
        var rowsR = []
        res.data?.tramites.map((item) => {
          rowsR.push({
            id: item.Id,
            Descripcion: item.Descripcion,
            Tipo: item.Tipo,
            Libro: item.Libro,
            Acta: item.Acta,
            TipoPago: item.TipoPago,
            Cliente: item.Cliente,
            Usuario: item.Usuario,
            IngreSo: item.IngreSo,
            Egreso: item.Egreso,
            MontoTotal: item.MontoTotal,
            MontoParcial: item.MontoParcial,
            PagoPendiente: item.PagoPendiente.data[0],
            FechaPagoTotal: item.FechaPagoTotal,
            FechaPagoParcial: item.FechaPagoParcial,
            CtaCte: item.CtaCte.data[0],
            Activo: item.Activo.data[0]
          })
        })

        setRows(rowsR)
        handleGettersClientes()
      }
    })
  }

  const handleGettersClientes = async () => {

    await axios.get('/api/clientes/allClient').then(res => {
      let ArryDos = []
      res.data.users.map((item) => {

        if (item.Active) {
          ArryDos.push({ value: item.Id, description: item.Name },)
        }
      })
      setOptions({ ...options, Cliente: ArryDos, Tipo: TIPOS_TRAMITES, TipoPago: TIPOS_PAGO })
      ArryDos = []
    });
  }

  const columns = [
    { field: 'Descripcion', headerName: 'Descripcion', flex: 0.1 },
    { field: 'Libro', headerName: 'Libro', flex: 0.07 },
    { field: 'Acta', headerName: 'Acta', flex: 0.07 },
    {
      field: 'MontoTotal', headerName: 'Monto Total', flex: 0.1, renderCell: (rows) => {
        return (
          <Stack direction="row" spacing={2} >
            $ {rows.row.MontoTotal}
          </Stack>
        );
      },
    },
    {
      field: 'MontoParcial', headerName: 'Monto Parcial', flex: 0.1, renderCell: (rows) => {
        return (
          <Stack direction="row" spacing={2} >
            $ {rows.row.MontoParcial}
          </Stack>
        );
      },
    },
    {
      field: 'IngreSo',
      headerName: 'Ingreso',
      sortable: false,
      flex: 0.1,
      renderCell: (rows) => {
        return (
          <Stack direction="row" spacing={2} >
            {rows.row.IngreSo == null ? '' : moment(rows.row.IngreSo).format("DD/MM/yyyy")}
          </Stack>
        );
      },
    },
    {
      field: 'Egreso',
      headerName: 'Egreso',
      sortable: false,
      flex: 0.1,
      renderCell: (rows) => {
        return (
          <Stack direction="row" spacing={2} >
            {rows.row.Egreso == null ? '' : moment(rows.row.Egreso).format("DD/MM/yyyy")}
          </Stack>
        );
      },
    },
    {
      field: 'PagoPendiente',
      headerName: 'Pagado',
      sortable: false,
      flex: 0.1,
      renderCell: (rows) => {
        return (
          <Stack direction="row" spacing={2} >
            {rows.row.PagoPendiente ? "No" : "Si"}
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
        const onClickMoney = (e) => {
          var params = {
            data: {
              id: rows.row.id,
              Activo: rows.row.Activo,
              PagoPendiente: rows.row.PagoPendiente,
              MontoTotal: rows.row.MontoTotal,
              MontoParcial: rows.row.MontoParcial,
            },
            url: '/api/tramites/pagoTramite',
          }
          UpdateMoney(params)
        };

        const onClickOut = (e) => {
          var params = {
            data: {
              id: rows.row.id,
              Activo: rows.row.Activo,
              PagoPendiente: rows.row.PagoPendiente,
              MontoTotal: rows.row.MontoTotal,
            },
            url: '/api/tramites/salidaTramite',
          }
          UpdateOut(params)
        };

        const onClickDelete = (e) => {
          var params = {
            data: {
              id: rows.row.id,
              Descripcion: rows.row.Descripcion,
            },
            url: '/api/tramites/deleteTramite',
          }
          Delete(params)
        };

        const onClickSee = (e) => {
          setValueModal({
            Descripcion: rows.row.Descripcion,
            Tipo: rows.row.Tipo,
            Libro: rows.row.Libro,
            Acta: rows.row.Acta,
            TipoPago: rows.row.TipoPago,
            Cliente: rows.row.Cliente,
            Usuario: rows.row.Usuario,
            IngreSo: rows.row.IngreSo,
            Egreso: rows.row.Egreso,
            MontoTotal: rows.row.MontoTotal,
            MontoParcial: rows.row.MontoParcial,
            PagoPendiente: rows.row.PagoPendiente,
            CtaCte: rows.row.CtaCte,
            FechaPagoTotal: rows.row.FechaPagoTotal,
            FechaPagoParcial: rows.row.FechaPagoParcial
          })
          handleOpen()
        };

        return (
          <Stack direction="row" spacing={1} >
            <Tooltip title="Agregar pago" placement="top-start">
              <IconButton aria-label="Check"
              disabled={!rows.row.PagoPendiente? true : false}
              color={"warning"} style={{ fontSize: '20px' }}
              onClick={onClickMoney} size="large">
               <AttachMoneyIcon style={{ color:`${!rows.row.PagoPendiente? 'green' : 'orange'}`, fontSize: '20px' }} />
            </IconButton>
            </Tooltip>

            <Tooltip title="Dar salida" placement="top-start">
            <IconButton aria-label="Check"
              disabled={rows.row.Egreso != null ? true : false}
              color={"primary"} style={{ fontSize: '20px' }}
              onClick={onClickOut} size="large">
              {rows.row.Egreso != null ? <Check style={{ color: 'green', fontSize: '20px' }} /> : <LogoutIcon style={{ fontSize: '20px' }} />}
            </IconButton>
            </Tooltip>

            <Tooltip title="Ver" placement="top-start">
            <IconButton aria-label="Ver" size="large" onClick={onClickSee}>
              <VisibilityIcon style={{ fontSize: '20px' }} />
            </IconButton>
            </Tooltip>
            <Tooltip title="Eliminar" placement="top-start">
            <IconButton aria-label="Eliminar" color="error" size="large" onClick={onClickDelete}>
              <DeleteIcon style={{ fontSize: '20px' }} />
            </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ]

  const UpdateOut = async (params) => {
    Swal.fire({
      title: 'Desea Continuar?',
      text: `Desea darle salida al tramite`,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        handleActive(params)
      }
    })
  }
  
  const UpdateMoney = async (params) => {
    // MontoTotal: rows.row.MontoTotal,
    // MontoParcial: rows.row.MontoParcial,
    Swal.fire({
      title: 'Desea Continuar?',

      // input: 'number',
      // inputValue:params.data.MontoTotal - params.data.MontoParcial,
      // inputAttributes: {
      //   autocapitalize: 'off'
      // },
      text: `Desea ingresar un pago de $${params.data.MontoTotal - params.data.MontoParcial}`,
      showCancelButton: true,
      reverseButtons: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        handleActive(params)
      }
    })
  }

  const Insert = async () => {
    Swal.fire({
      title: 'Desea Agregar',
      text: `Desea agregar el usuario ${value.Descripcion}`,
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

  const Delete = async (params) => {
    Swal.fire({
      title: 'Desea Eliminar',
      text: `Desea eliminar el tramite ${params.data.Descripcion}`,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      confirmButtonColor: "#26a69a"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(params)
      }
    })
  }

  const handleActive = async (params) => {
    await InsertsOrUpdate(params)
    await handleGetters()
    await confirmPopUp()
  }

  const handleDelete = async (params) => {
    await InsertsOrUpdate(params)
    await confirmPopUp()
  }

  const handleInsert = async () => {
    var data = {
      Descripcion: value.Descripcion,
      Tipo: value.Tipo,
      Libro: value.Libro,
      Acta: value.Acta,
      TipoPago: value.TipoPago,
      Cliente: value.Cliente,
      Usuario: value.Usuario,
      IngreSo: moment().format("yyyy/MM/DD"),
      Egreso: value.Egreso,
      MontoTotal: value.MontoTotal,
      MontoParcial: value.MontoParcial,
      PagoPendiente: value.PagoPendiente,
      CtaCte: value.CtaCte,
      Activo: value.Activo,
      FechaPagoTotal: value.FechaPagoTotal
    }
    var params = {
      data: data,
      url: '/api/tramites/insertTramite',
    }

    await InsertsOrUpdate(params)
    await handleGetters()
    await setValue(TRAMITE)
    setOcultar(true)
    await confirmPopUp()
  }

  const handleCancel = () => {
    setValue(TRAMITE)
  }


  return (
    <div>
      <Title titulo='Tramites' />
      <InsertAndUpdate ocultar={ocultar} setOcultar={setOcultar} title={'Agregar Tramite'} options={options} constForm={FORM_TRAMITE} value={value} setValue={setValue}  handleCancel={handleCancel} handleInsert={Insert} />
      <DataGridWithFilters title={'Lista de tramites'} columns={columns} rows={rows} pageSize={10} rowsPerPageOptions={[10]} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h2">
              Tramite {valueModal.Descripcion}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={8}><Typography><b>Tipo:</b> {valueModal.Tipo == 0 ? "Cert. Firm" : "Fotocopia"}</Typography></Grid>
            <Grid item xs={6}><Typography><b>Cta Cte:</b> {valueModal.CtaCte ? "Si" : "No"}</Typography></Grid>
            <Grid item xs={6}><Typography><b>Pagado:</b> {valueModal.PagoPendiente ? "No" : "Si"}</Typography></Grid>
            <Grid item xs={6}><Typography><b>Libro:</b> {valueModal.Libro}</Typography></Grid>
            <Grid item xs={6}><Typography><b>Acta:</b> {valueModal.Acta}</Typography></Grid>
            <Grid item xs={6}><Typography><b>Monto Total:</b> ${valueModal.MontoTotal}</Typography></Grid>
            <Grid item xs={6}><Typography><b>Monto Parcial:</b> ${valueModal.MontoParcial}</Typography></Grid>
            <Grid item xs={8}><Typography><b>Tipo Pago:</b> {valueModal.TipoPago == 0 ? "Efectivo" : "Mercado Pago"}</Typography></Grid>
            <Grid item xs={12}><Typography><b>Ingreso:</b> {moment(valueModal.IngreSo).format("DD/MM/yyyy")}</Typography></Grid>
            <Grid item xs={12}><Typography><b>Egreso:</b> {valueModal.Egreso == null ? '' : moment(valueModal.Egreso).format("DD/MM/yyyy")}</Typography></Grid>
            <Grid item xs={12}><Typography><b>Fecha pago parcial:</b> {valueModal.FechaPagoParcial == null ? '' : moment(valueModal.FechaPagoParcial).format("DD/MM/yyyy")}</Typography></Grid>
            <Grid item xs={12}><Typography><b>Fecha pago total:</b> {valueModal.FechaPagoTotal == null ? '' : moment(valueModal.FechaPagoTotal).format("DD/MM/yyyy")}</Typography></Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default Tramitestodos
