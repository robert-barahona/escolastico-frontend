import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Club } from '../models/club.model';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  url : string = "https://localhost:44344/api/Club";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  selectedClub: Club;
  list_clubs: Club[];

  constructor(private http:HttpClient) { }

  PostClub(club: Club): Observable<any> {
    let clubBody = JSON.stringify(club);    
    return this.http.post<any>(this.url, clubBody, this.httpOptions);
  }

  GetClub(): Observable<HttpResponse<Club[]>>{
    return this.http.get<Club[]>(this.url, {observe: 'response'})
  }

  PutClub(club: Club, id_club: number): Observable<any> {
    let clubBody = JSON.stringify(club);    
    return this.http.put<any>(this.url + '/' + id_club, clubBody, this.httpOptions);
  }

  DeleteClub(club: Club): Observable<any> {
    return this.http.delete<any>(this.url + '/' + club.id_club, this.httpOptions);
  }

  GetClubById(id_club: number): Observable<Club> {
    return this.http.get<Club>(this.url + "/" + id_club, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  listClubs() {
    this.GetClub().subscribe(result => {      
      this.list_clubs = result.body
    });
  }

}
