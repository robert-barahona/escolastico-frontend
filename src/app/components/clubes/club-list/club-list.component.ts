import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/services/club.service';
import { Club } from 'src/app/models/club.model';
import { faTrash, faEye, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  faEye = faEye;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  constructor(public service: ClubService) { }

  ngOnInit(): void {
    this.service.listClubs();
  }

  editClub(club: Club){
    this.service.selectedClub = Object.assign({}, club);
  }

  onDelete(club: Club){
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: 'El club \'' + club.nombre + '\' será eliminado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.service.DeleteClub(club).subscribe(x => {
          this.service.listClubs();
        })
      }
    })
  }

}
