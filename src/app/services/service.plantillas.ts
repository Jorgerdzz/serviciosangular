import { Injectable } from "@angular/core";
import { Plantilla } from "../models/plantilla";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServicePlantilla{

    constructor(private _http:HttpClient){}

    getFunciones(): Observable<Array<string>>{
        let url = environment.urlApiPlantilla;
        let request = "api/Plantilla/Funciones";
        return this._http.get<Array<string>>(url + request);
    }

    getPlantillas(funcion: string): Promise<Array<Plantilla>>{
        let url = environment.urlApiPlantilla;
        let request = "api/Plantilla/PlantillaFuncion/" + funcion;
        const plantilla = fetch(url + request).then(response=>response.json())
        return plantilla;
    }

    getPlantillasFuncionMultiple(funciones: Array<string>): Observable<Array<Plantilla>>{
        let datos = "";
        for(var funcion of funciones){
            datos += "funcion=" + funcion + "&";
        }
        datos = datos.substring(0, datos.length - 1);
        let url = environment.urlApiPlantilla;
        let request = "api/Plantilla/PlantillaFunciones?" + datos;
        return this._http.get<Array<Plantilla>>(url + request)
    }
    

}