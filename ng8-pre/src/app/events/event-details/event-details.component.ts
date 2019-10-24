import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService }       from '../../data.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  protected id: string;

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  //Recibe el ID del Evento
  ngOnInit() {
    this.route.params.subscribe( params => this.id = params.id );
    //this.data.getEvent(this.id);
  }



}
