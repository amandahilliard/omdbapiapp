import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Movie } from '../interfaces/search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title: string = "title";
  year: string = "year";
  type: string = "type";
  movie: Array<Movie>;
  poster: string = "";
  Response: boolean;
  error: string;

  constructor(private searchService: SearchService) { }

  searchMovie(){
   this.searchService.searchMovie(this.title, this.year, this.type).subscribe(res =>{
    if(this.title.length < 3){
      return
      }
      if(this.Response === true){
        this.year, this.title, this.type
      }
      else {
        return this.error
      }
   })
  }

  ngOnInit(): void {
  
  }

}
