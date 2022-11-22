import { pool } from "../../../config/db.js"
import moment from 'moment';
import dayjs from 'dayjs';

export default async function AllUserHandler(req, res) {
var pagoParcial=null;
var pagoTotal=null;

const { Descripcion ,Tipo ,Libro ,Acta ,TipoPago ,Cliente ,Usuario ,IngreSo ,Egreso ,MontoTotal ,MontoParcial ,PagoPendiente ,CtaCte ,Activo} = req.body
  const { AuthToken } = req.cookies
  if (AuthToken) {
  
    if(PagoPendiente){
      pagoParcial='"'+moment(dayjs(Date.now())).format("yyyy/MM/DD")+'"'
    }else{
      pagoTotal='"'+moment(dayjs(Date.now())).format("yyyy/MM/DD")+'"'
    }

      const Insert =
      `INSERT INTO escribania.tramites(Descripcion,Tipo,Libro,Acta,TipoPago,Cliente,Usuario,IngreSo,MontoTotal,MontoParcial,PagoPendiente,CtaCte,Activo, FechaPagoTotal, FechaPagoParcial)VALUES('${Descripcion}',${Tipo},${Libro},${Acta},${TipoPago},${Cliente},${Usuario},'${IngreSo}',${MontoTotal},${MontoParcial},${PagoPendiente},${CtaCte},${Activo}, ${pagoTotal}, ${pagoParcial});`
      await pool.query(Insert)
      return res.status(200).json({ users: 'Usuario insertado correctamente' })

  }
}
