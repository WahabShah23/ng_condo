import { SpecializedFacilityService } from './../../../../../../../../services/building-settings/specialized-facility.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-movie-theatre',
    templateUrl: "./movie-theatre.component.html",
    styleUrls: ["./movie-theatre.component.css"]
})
export class MovieTheatreComponent implements OnInit {

    constructor(private specializedService: SpecializedFacilityService) { }

    ngOnInit() {
        this.movieTheatres = this.specializedService.getMovieTheatre();
    }


    addMovieTheatreForm = false;
    isMovieThreatreGridView = true;
    TheatreViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/movie-theatre/1.jpg';
    movieTheatres;

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

    addTheatre(theatreName, img, theatreParticipants, theatreDescription) {
        // this.movieTheatres.push({name: theatreName, img:img,  allowed: theatreParticipants , description:theatreDescription});
        this.specializedService.addTheatre(theatreName, img, theatreParticipants, theatreDescription);
        this.isMovieThreatreGridView = !this.isMovieThreatreGridView;
        this.changeGameView();

    }

    deleteTheatre(id) {
        this.specializedService.deleteTheatre(id);
    }

}
