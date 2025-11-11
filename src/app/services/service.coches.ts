import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Coche } from "../models/Coche";


@Injectable()
export class ServiceCoche{

    constructor(private _http:HttpClient){}

    getCoches(): Promise<Array<Coche>>{
        let url = environment.urlApiCoches;
        let request = "webresources/coches";
        const coches = fetch(url + request).then(response=> response.json());
        return coches;
        // let promise = new Promise<Array<Coche>>((resolve) => {
        //     fetch(url + request)
        //         .then(response => response.json())
        //         .then((coches: Array<Coche>) => resolve(coches))
        // });
        // return promise;
    }

}