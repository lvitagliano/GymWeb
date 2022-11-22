import dayjs from 'dayjs';

export const FORM_USUARIO = [
   { type:'input', tipo:'text', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Nombre', id:'Name', placheH:'Nombre', hide:false, requerido:true},
   { type:'input', tipo:'text', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Apellido', id:'LastName', placheH:'Apellido', hide:false, requerido:true},
   { type:'input', tipo:'number', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'DNI', id:'DNI', placheH:'DNI', hide:false, requerido:false},
   { type:'input', tipo:'text', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Nombre de usuario', id:'UserName', placheH:'Nombre de usuario', hide:false, requerido:true},
   { type:'input', tipo:'password', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Password', id:'Password', placheH:'Password', hide:false, requerido:true},
   { type:'input', tipo:'mail', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Mail', id:'Mail', placheH:'Mail', hide:false, requerido:true},
   { type:'select', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Tipo', id:'Type', placheH:'Tipo.', hide:true, requerido:true},
   { type:'check', tamanio:13, row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Activo', id:'Active', placheH:'Activo', requerido:false}
]

export const USUARIOS = {
   id: 0,
   Name: "",
   LastName: "",
   DNI: 0,
   UserName: "",
   Password: "",
   Mail: "",
   Type: 0,
   Active: false,
}

export const FORM_CLIENT = [
   { type:'input', tipo:'text', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Nombre', id:'Name', placheH:'Nombre', hide:false, requerido:true},
   { type:'input', tipo:'text', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Apellido', id:'LastName', placheH:'Apellido', hide:false, requerido:true},
   { type:'input', tipo:'number', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'DNI', id:'DNI', placheH:'DNI', hide:false, requerido:false},
   { type:'select', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Tipo', id:'Type', placheH:'Tipo.', hide:false, requerido:true},
   { type:'check', tamanio:13, row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Activo', id:'Active', placheH:'Activo', requerido:false}
]

export const CLIENT = {
   id: 0,
   Name: "",
   LastName: "",
   DNI: 0,
   Mail: "",
   Type: 0,
   Active: false,
}


export const FORM_TRAMITE = [
   { type:'input', tipo:'text', row: 1, clase:'col-md-6 col-lg-4 col-sm-6', title:'Descripcion', id:'Descripcion', placheH:'Descripcion', hide:false, requerido:true},
   { type:'input', tipo:'number', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Libro', id:'Libro', placheH:'Libro', hide:false, requerido:true},
   { type:'input', tipo:'number', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Acta', id:'Acta', placheH:'Acta', hide:false, requerido:false},
   { type:'select', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Tipo de Pago', id:'TipoPago', placheH:'Tipo de Pago', hide:false, requerido:true},
   { type:'select', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Tipo de Tramite', id:'Tipo', placheH:'Tipo de Tramite', hide:false, requerido:true},
   { type:'Date', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Ingreso', id:'IngreSo', placheH:'Ingreso', hide:false, requerido:true},
   // { type:'Date', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Egreso', id:'Egreso', placheH:'Egreso', hide:false, requerido:true},
   { type:'input', tipo:'number', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'MontoTotal', id:'MontoTotal', placheH:'MontoTotal', hide:false, requerido:true},
   { type:'check', tamanio:13, row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Pago Pendiente', id:'PagoPendiente', placheH:'Pago Pendiente', requerido:false},
   { type:'input', tipo:'number', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'MontoParcial', id:'MontoParcial', placheH:'MontoParcial', hide:true, requerido:true},
   { type:'select2', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Cliente', id:'Cliente', placheH:'Cliente', hide:true, requerido:true},
   { type:'check', tamanio:13, row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Cta Cte', id:'CtaCte', placheH:'Cta Cte', requerido:false},
   // { type:'check', tamanio:13, row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Activo', id:'Activo', placheH:'Activo', requerido:false}
]

export const TRAMITE = {
   Id : 0,
   Descripcion : "",
   Tipo: 0,
   Libro: null,
   Acta: null,
   TipoPago : 0,
   Tipo: 0,
   Cliente: 0,
   Usuario: 0,
   IngreSo: dayjs(Date.now()),
   Egreso: dayjs(Date.now()),
   MontoTotal: 0,
   MontoParcial: 0,
   PagoPendiente: false,
   CtaCte: false,
   Activo: false,
   FechaPagoTotal: null
}
export const FORM_BUSQUEDA_CLIENTE_TRAMITE = [
   { type:'select', row: 1, width:'400px', clase:'col-md-8 col-lg-8 col-sm-8', title:'Cliente', id:'Cliente', placheH:'Cliente', hide:false, requerido:true},
   { type:'check', tamanio:13, row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Con Deuda', id:'ConDeuda', placheH:'Con Deuda', requerido:false},
   { type:'check', tamanio:13, row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Retirados', id:'Retirados', placheH:'Retirados', requerido:false},
   { type:'Date', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Desde', id:'Desde', placheH:'Desde', hide:false, requerido:true},
   { type:'Date', row: 1, clase:'col-md-4 col-lg-3 col-sm-6', title:'Hasta', id:'Hasta', placheH:'Hasta', hide:false, requerido:true},

]

export const TRAMITES = {
   Cliente: 0,
   Desde:null,
   Hasta:null,
   ConDeuda: false,
   Retirados: false
}