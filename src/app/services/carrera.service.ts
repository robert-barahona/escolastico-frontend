import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from '../models/carrera.model';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  url : string = "https://localhost:44344/api/Carreras";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  selectedCarrera: Carrera;
  list_carreras: Carrera[];

  constructor(private http:HttpClient) { }

  PostCarrera(carrera: Carrera): Observable<any> {
    let carreraBody = JSON.stringify(carrera);    
    return this.http.post<any>(this.url, carreraBody, this.httpOptions);
  }

  GetCarrera(): Observable<HttpResponse<Carrera[]>>{
    return this.http.get<Carrera[]>(this.url, {observe: 'response'})
  }

  PutCarrera(carrera: Carrera, id_carrera: number): Observable<any> {
    let carreraBody = JSON.stringify(carrera);    
    return this.http.put<any>(this.url + '/' + id_carrera, carreraBody, this.httpOptions);
  }

  DeleteCarrera(carrera: Carrera): Observable<any> {
    return this.http.delete<any>(this.url + '/' + carrera.id_carrera, this.httpOptions);
  }

  GetCarreraById(id_carrera: number): Observable<Carrera> {
    return this.http.get<Carrera>(this.url + "/" + id_carrera, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  listCarreras() {
    this.GetCarrera().subscribe(result => {      
      this.list_carreras = result.body
    });
  }

}
