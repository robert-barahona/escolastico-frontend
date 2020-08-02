import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoService } from './services/alumno.service';
import { ServiceInterceptor } from './services/service.interceptor';
import { AlumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoListComponent } from './components/alumno-main/alumno-list/alumno-list.component';
import { AlumnoFormComponent } from './components/alumno-main/alumno-form/alumno-form.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MasmasPipe } from './shared/pipes/masmas.pipe';
import { SexdescPipe } from './shared/pipes/sexdesc.pipe';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { CarreraFormComponent } from './components/carreras/carrera-form/carrera-form.component';
import { CarreraListComponent } from './components/carreras/carrera-list/carrera-list.component';
import { CarreraCardComponent } from './components/carreras/carrera-card/carrera-card.component';

@NgModule({
  declarations: [
    AppComponent,    
    AlumnoMainComponent,
    AlumnoListComponent,
    AlumnoFormComponent,
    AlumnoCardComponent,
    MasmasPipe,
    SexdescPipe,
    MateriaFormComponent,
    MatriculaFormComponent,
    CarrerasComponent,
    CarreraFormComponent,
    CarreraListComponent,
    CarreraCardComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule   
  ],
  providers: [
    AlumnoService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue : 'es-EC'
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
