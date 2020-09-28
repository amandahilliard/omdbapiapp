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

  constructor(private searchService: SearchService) { }

  searchMovie(){
    if(this.title.length < 3){
    return 
    }
    this.searchService.searchMovie(this.title, this.year, this.type).subscribe((res: Array<Movie>)=> this.movie = res);

  }

  ngOnInit(): void {
  

  }

}
