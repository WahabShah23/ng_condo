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

  
  addGameForm = false;
  isGameGridView = true;
  GameViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/movie-theatre/1.jpg';
  gameRooms = [
    {
        name: "Movie Theatre 1", img: 'assets/app/media/img/custom/movie-theatre/1.jpg', allowed: 4 , description: "Theatre Room for movies"
    },
    {
        name: 'Movie Theatre 2', img: 'assets/app/media/img/custom/movie-theatre/1.jpg',  allowed:5 ,  description: "Theatre Room for documentaries"
    }
   ];

   buildingName = "ABC Building";

   changeGameView() {
    this.isGameGridView = !this.isGameGridView;
    if (this.isGameGridView) {
        this.GameViewName = 'List View';
    }
    else {
        this.GameViewName = 'Grid View';
    }
    this.addGameForm = false;
}

addGame(gameName, img , numberOfParticipants, gameDescription) {
    this.gameRooms.push({name: gameName, img:img,  allowed: numberOfParticipants , description:gameDescription});
    this.isGameGridView = !this.isGameGridView;
    this.changeGameView();
    
}

deleteGame(id)
{
    this.gameRooms.splice(id,1);
}

}
