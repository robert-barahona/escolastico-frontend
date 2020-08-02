import { Component, OnInit } from '@angular/core';
import { CarreraService } from 'src/app/services/carrera.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-carrera-form',
  templateUrl: './carrera-form.component.html',
  styleUrls: ['./carrera-form.component.css']
})
export class CarreraFormComponent implements OnInit {

  constructor(public service: CarreraService) { }

  ngOnInit(): void {
    this.resetButton();
  }

  resetButton(form? : NgForm){
    if(form != null){
      form.reset();
    }
    this.service.selectedCarrera = {
      id_carrera: null,
      nombre: '',
      campus: '',
      titulo: ''
    }
  }

  onSubmit(form: NgForm){
    if (this.service.selectedCarrera.id_carrera == null) {
      this.service.PostCarrera(form.value).subscribe(data => {
        this.resetButton(form);
        this.service.listCarreras();
      })
    }else{
      this.service.PutCarrera(this.service.selectedCarrera, this.service.selectedCarrera.id_carrera).subscribe(data => {
        this.resetButton(form);
        this.service.listCarreras();
      })

      swal.fire({
        title : "¡Correcto!",
        text : 'El registro ha sido editado',
        icon : "info"
      });
    }
  }

}
