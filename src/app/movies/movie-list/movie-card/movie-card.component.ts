import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Movie } from 'src/app/movie';
import { MovieService } from '../../../movie.service';




@Component({
  selector: 'app-movie-card',
  templateUrl:'./movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  providers: [MovieService]
})
export class MovieCardComponent implements OnInit {
  modalRef: BsModalRef;
  
  @Input() movie:Movie;
  editMode: boolean = false;
  

  constructor(private modalService: BsModalService, private movieService:MovieService) {}

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
  }
  removeMovie(id){
    this.movieService.deleteMovie(id);
  }
}






 