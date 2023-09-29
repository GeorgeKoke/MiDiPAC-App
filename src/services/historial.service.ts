import Global from "src/environments/Global";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class HistorialService{
    public url: string;

    constructor(private http:HttpClient){
        this.url = Global.API;
    }

    create(historial:any):Observable<any>{
        let params = JSON.stringify(historial);
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this.http.post(this.url+'post-historial',params,{headers:headers})
    }

    getAll():Observable<any>{
        return this.http.get(this.url+'get-historiales');
    }
    getByRut(params:any):Observable<any>{
        return this.http.get(this.url+'find-historiales/'+params);
    }

    
}