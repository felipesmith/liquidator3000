import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-mystatistics',
  templateUrl: './mystatistics.component.html',
  styleUrls: ['./mystatistics.component.scss']
})



export class MystatisticsComponent implements OnInit {

  constructor(private data: DataService) { }
 
  users = this.data.user;

  ngOnInit() {
    
  }
  misLiquidaciones(){
    return this.data.misLiquidaciones();
  }


}
