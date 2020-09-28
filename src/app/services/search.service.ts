import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  searchMovie(title: string, year: string, type: string){
    return this.http.get(`http://www.omdbapi.com/?i=tt3896198&apikey=3d441920&s=${title}&y=${year}&type=${type}`);
  }


}
