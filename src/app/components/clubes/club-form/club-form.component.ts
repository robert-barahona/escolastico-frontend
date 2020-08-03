import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/services/club.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-club-form',
  templateUrl: './club-form.component.html',
  styleUrls: ['./club-form.component.css']
})
export class ClubFormComponent implements OnInit {

  constructor(public service: ClubService) { }

  ngOnInit(): void {
    this.resetButton();
  }

  resetButton(form? : NgForm){
    if(form != null){
      form.reset();
    }
    this.service.selectedClub = {
      id_club: null,
      nombre: '',
      campus: '',
      lider: '',
      telefono: ''
    }
  }

  onSubmit(form: NgForm){
    if (this.service.selectedClub.id_club == null) {
      this.service.PostClub(form.value).subscribe(data => {
        this.resetButton(form);
        this.service.listClubs();
      })
    }else{
      this.service.PutClub(this.service.selectedClub, this.service.selectedClub.id_club).subscribe(data => {
        this.resetButton(form);
        this.service.listClubs();
      })

      swal.fire({
        title : "¡Correcto!",
        text : 'El registro ha sido editado',
        icon : "info"
      });
    }
  }

}
