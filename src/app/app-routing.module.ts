import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { ClubesComponent } from './components/clubes/clubes.component';
import { ClubCardComponent } from './components/clubes/club-card/club-card.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'alumnos', component: AlumnoMainComponent},
  {path: 'alumnos/:id', component: AlumnoCardComponent},
  {path: 'materias', component: MateriaFormComponent},
  {path: 'materias/:id', component: MateriaFormComponent},
  {path: 'matriculas', component: MatriculaFormComponent},
  {path: 'clubs', component: ClubesComponent},
  {path: 'clubs/:id', component: ClubCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
