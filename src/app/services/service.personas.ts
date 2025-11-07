import { Persona } from "../models/persona";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas{

    constructor(private _http:HttpClient){

    }

    getPersona(): Observable<any>{
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/";
        let request = "api/personas";
        return this._http.get(urlApi + request)
    }

    getPersonasPromise(): Promise<any>{
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/";
        let request = "api/personas";
        let promise = new Promise((resolve)=>{
            this._http.get(urlApi + request).subscribe(response=>{
                resolve(response)
            })
        })
        return promise
    }
}