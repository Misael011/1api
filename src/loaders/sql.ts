import * as sql from "mssql";
import config from '../config';
import Logger from './logger';

const sqlConfig = {
  user: "missael",
  password: "123456",
  database: "PRUEBAS",
  server: "localhost",
  options: {
    trustServerCertificate: true
  },
};



export default async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(sqlConfig)
    const result = await sql.query`select * from gestores`;
    Logger.info('✌️ DB loaded and connected!');
    return sql
   } catch (err) {
    // ... error checks
    console.log("error DB:",err)
   }
}
