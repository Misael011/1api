import { Service } from "typedi";
import sqlC from '../loaders/sql';
import * as sql from 'mssql';

const sqlConfig = {
    user: "missael",
    password: "123456",
    database: "PRUEBAS",
    server: "localhost",
    options: {
      trustServerCertificate: true
    },
  };

@Service()
export default class LugaresService {

    //  sqlConnection:sql =  sqlC();

    showAll(): Promise<any> {
        sql.connect(sqlConfig)
        const result =  sql.query`select * from PIN`;
        console.log(result);
         return result
    
      }
}
