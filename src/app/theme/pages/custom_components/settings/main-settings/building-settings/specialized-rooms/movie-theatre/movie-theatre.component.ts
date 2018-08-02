import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-theatre',
  templateUrl: "./movie-theatre.component.html",
  styleUrls: ["./movie-theatre.component.css"]
})
export class MovieTheatreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  addMovieTheatreForm = false;
  isMovieThreatreGridView = true;
  TheatreViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/movie-theatre/1.jpg';
  movieTheatres = [
    {
        name: "Movie Theatre 1", img: 'assets/app/media/img/custom/movie-theatre/1.jpg', allowed: 4 , description: "Theatre Room for movies"
    },
    {
        name: 'Movie Theatre 2', img: 'assets/app/media/img/custom/movie-theatre/1.jpg',  allowed:5 ,  description: "Theatre Room for documentaries"
    }
   ];

   buildingName = "ABC Building";

   changeGameView() {
    this.isMovieThreatreGridView = !this.isMovieThreatreGridView;
    if (this.isMovieThreatreGridView) {
        this.TheatreViewName = 'List View';
    }
    else {
        this.TheatreViewName = 'Grid View';
    }
    this.addMovieTheatreForm = false;
}

addTheatre(theatreName, img , theatreParticipants, theatreDescription) {
    this.movieTheatres.push({name: theatreName, img:img,  allowed: theatreParticipants , description:theatreDescription});
    this.isMovieThreatreGridView = !this.isMovieThreatreGridView;
    this.changeGameView();
    
}

deleteTheatre(id)
{
    this.movieTheatres.splice(id,1);
}

}
