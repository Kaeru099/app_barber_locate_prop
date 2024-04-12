import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private _refresh$ = new Subject<void>()

  get refresh$(){
    return this._refresh$
  }

  url = 'http://127.0.0.1:80'

  constructor(private http:HttpClient) { }

  consultaBarberos():Observable<any>{
    return this.http.get(this.url+'/consultaBarberos')
  }

  consultaPerfilPropietario():Observable<any>{
    return this.http.get(this.url+'/consultaPerfilPropietario')
  }

  borrarBarbero(fk_cedulaB:any){
    return this.http
    .post(this.url+'/borrarBarbero', JSON.stringify(fk_cedulaB))
    .pipe(tap(() => {
      this.refresh$.next()
    } 
    ))
  }

  editarPerfilPropietario(data:any):Observable<any>{
    return this.http
    .post(this.url+'/editarPerfilPropietario', JSON.stringify(data))
    .pipe(tap(() => {
      this.refresh$.next()
    } 
    ))
  }

  consultaPerfilBarberia():Observable<any>{
    return this.http.get(this.url+'/consultaPerfilBarberia')
  }

}
