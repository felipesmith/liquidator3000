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


  title:string;
  description:string;
  location:string;
  type: string;

  constructor(private data: DataService) { }


  ngOnInit() {
  }



// FUNCIONES //
  createEvent() {
    console.log(this.title);
    return this.data.createEvent(this.title,this.description, this.location, this.type, this.data.username);
  }

}
