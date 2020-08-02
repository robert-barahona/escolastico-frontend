import { Component, OnInit } from '@angular/core';
import { faUser, faIdCard, faCalendar, faMapMarked, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { Carrera } from 'src/app/models/carrera.model';
import { CarreraService } from 'src/app/services/carrera.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrera-card',
  templateUrl: './carrera-card.component.html',
  styleUrls: ['./carrera-card.component.css']
})
export class CarreraCardComponent implements OnInit {

  faUser = faUser;
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarked = faMapMarked;
  faGenderless = faGenderless;

  carrera: Carrera;

  constructor(private service: CarreraService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.service.GetCarreraById(params['id']).subscribe(
            result => { 
              this.carrera = result; 
            }
          )
        }
      }
    );
  }

}
