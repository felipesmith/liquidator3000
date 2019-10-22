import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';
import { MatCard } from '@angular/material';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private data: DataService) { }

  isLoggedIn(): boolean {
    return this.data.isloggin;
  }

  ngOnInit() {
  }

}
