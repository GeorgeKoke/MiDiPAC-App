import Global from "src/environments/Global";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CentroService{
    public url: string;

    constructor(private http:HttpClient){
        this.url = Global.API;
    }

    create(centro:any):Observable<any>{
        let params = JSON.stringify(centro);
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this.http.post(this.url+'post-centro',params,{headers:headers})
    }

    getAll():Observable<any>{
        return this.http.get(this.url+'get-centros');
    }

    search(params:string):Observable<any>{
        return this.http.get(`${this.url}get-centro/${params}`)
    }

    
}