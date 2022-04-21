import { Request, Response, NextFunction } from "express";
import Container from "typedi";
import LoggerInstance from "../../loaders/logger";
import LugaresService from "../../services/lugares.service";

export const getALL = (req: Request, res: Response, next: NextFunction) => {
    console.log("getALL");

    const lugaresService = Container.get(LugaresService)
    lugaresService.showAll().then(lugares => {
        res.send(lugares)            
    }).catch(next)    
}