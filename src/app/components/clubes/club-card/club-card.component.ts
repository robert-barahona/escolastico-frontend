import { Component, OnInit } from '@angular/core';
import { faUser, faLocationArrow, faTag, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Club } from 'src/app/models/club.model';
import { ClubService } from 'src/app/services/club.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.css']
})
export class ClubCardComponent implements OnInit {

  faUser = faUser;
  faIdCard = faTag;
  faLocationArrow = faLocationArrow;
  faPhone = faPhone;

  club: Club;

  constructor(private service: ClubService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.service.GetClubById(params['id']).subscribe(
            result => { 
              this.club = result; 
            }
          )
        }
      }
    );
  }

}
