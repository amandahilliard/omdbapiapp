export interface Movie{
    Search: Array<Movie>,
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string, 
}

export interface Search {
    TotalResults: number;
    Response: boolean;
    Error: string;
}