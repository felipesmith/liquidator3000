import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService }       from '../../data.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  // MANEJO DE ERRORES //
  /*email        = new FormControl('', [Validators.required, Validators.email]);
  titulo       = new FormControl('', [Validators.required]);
  descripcion  = new FormControl('', [Validators.required]);
  ubicacion     = new FormControl('', [Validators.required]);
  fecha         = new FormControl('', [Validators.required]);
  tipo         = new FormControl('', [Validators.required]);*/

  data2: {title: string,
  description: string,
  location:string,
  type: string};

  title:string;
  description:string;
  location:string;
  type: string;

  constructor(private data: DataService) { }


  ngOnInit() {
  }


// MANEJO DE ERRORES //
/*getErrorMessageMail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';

  }

  getErrorMessageTitulo() {
    return this.titulo.hasError('required') ? 'Tienes que ingresar un titulo' :
            '';

  }


  getErrorMessageDescripcion() {
    return this.descripcion.hasError('required') ? 'Tienes que ingresar una descripción' :
            '';

  }


  getErrorMessageLocation() {
    return this.ubicacion.hasError('required') ? 'Tienes que ingresar una ubicacion' :
            '';

  }

  getErrorMessageDate() {
    return this.fecha.hasError('required') ? 'Tienes que ingresar una fecha' :
            '';

  }

  getErrorMessageTipo() {
    return this.tipo.hasError('required') ? 'Tienes que ingresar un tipo de Evento' :
            '';

  }*/

// FUNCIONES //
  /*createEvent() {
    console.log(this.title);
    return this.data.createEvent(this.title,this.description, this.location, this.type, this.data.username);
  }*/

}
