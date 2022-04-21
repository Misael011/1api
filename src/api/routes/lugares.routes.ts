import { Router } from 'express';
import isAuth from '../middlewares/isAuth';
import * as LugaresHandlers from '../handlers/lugares.handler';

const route = Router();

export default (app: Router) => {
  app.use('/lugares', route)
  
  route.get(
    '',
    LugaresHandlers.getALL
  )
  
}
