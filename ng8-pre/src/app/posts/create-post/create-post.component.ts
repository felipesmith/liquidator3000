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
  name:string;
  adress:string;
  puesto:string;
  date: Date;
  billing: string;
  payroll: string;
  salary: number;



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
    console.log(this.billing, this.payroll);
    return this.data.createEmployee(this.dni,this.name, this.adress, this.puesto,this.date, this.billing, this.payroll, this.salary);
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
