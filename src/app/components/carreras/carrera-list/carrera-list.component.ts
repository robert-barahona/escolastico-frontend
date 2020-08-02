import { Component, OnInit } from '@angular/core';
import { CarreraService } from 'src/app/services/carrera.service';
import { Carrera } from 'src/app/models/carrera.model';
import { faTrash, faEye, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';

@Component({
  selector: 'app-carrera-list',
  templateUrl: './carrera-list.component.html',
  styleUrls: ['./carrera-list.component.css']
})
export class CarreraListComponent implements OnInit {

  faEye = faEye;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;
  
  constructor(public service: CarreraService) { }

  ngOnInit(): void {
    this.service.listCarreras();
  }

  editCarrera(carrera: Carrera){
    this.service.selectedCarrera = Object.assign({}, carrera);
  }

  onDelete(carrera: Carrera){
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: 'La carrera \'' + carrera.nombre + '\' será eliminada',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.service.DeleteCarrera(carrera).subscribe(x => {
          this.service.listCarreras();
        })
      }
    })
  }

}
