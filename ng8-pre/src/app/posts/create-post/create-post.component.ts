import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService }       from '../../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  // MANEJO DE ERRORES //
  /*email        = new FormControl('', [Validators.required, Validators.email]);
  titulo       = new FormControl('', [Validators.required]);
  descripcion  = new FormControl('', [Validators.required]);
  ubicacion     = new FormControl('', [Validators.required]);
  fecha         = new FormControl('', [Validators.required]);
  tipo         = new FormControl('', [Validators.required]);*/

  dni:string;
  cuit:string;
  cbu: string;
  name:string;
  adress:string;
  puesto:string;
  date: Date;
  billing: string;
  payroll: string;
  salary: number;
  antiguedad:number;
  antiguedadtipo: string;
  presentismo:number;
  presentismotipo: string;
  jubilacion:number;
  jubilaciontipo: string;
  diasContratados: number;
  os:number;
  ostipo: string;
  pami:number;
  pamitipo: string;
  concepto:{
    nombre:string;
    valor: number;
    tipo: string;
  }[] = [];



  constructor(private data: DataService,
  public dialog: MatDialog) { }


  ngOnInit() {
  }


  openDialog(): void {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

// FUNCIONES //
  createEmployee() {
    var concepto2 = {nombre:'Antiguedad', valor:this.antiguedad, tipo:this.antiguedadtipo};
    this.concepto.push(concepto2);
    var concepto2 = {nombre:'Presentismo', valor:this.presentismo, tipo:this.presentismotipo};
    this.concepto.push(concepto2);
    var concepto2 = {nombre:'Jubilacion', valor:this.jubilacion, tipo:this.jubilaciontipo};
    this.concepto.push(concepto2);
    var concepto2 = {nombre:'Obra Social', valor:this.os, tipo:this.ostipo};
    this.concepto.push(concepto2);
    var concepto2 = {nombre:'PAMI', valor:this.pami, tipo:this.pamitipo};
    this.concepto.push(concepto2);
    console.log(this.concepto);
    console.log(this.cuit);
    return this.data.createEmployee(this.dni, this.cuit,this.cbu, this.name, this.adress, this.puesto,this.date, this.billing, this.payroll,this.salary, this.concepto, this.diasContratados);
  }

}




@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
