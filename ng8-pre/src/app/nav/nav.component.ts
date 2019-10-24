import { Component, OnInit, Inject }          from '@angular/core';
//El DataService se utiliza para centralizar los datos, se utiliza para enviar y recibir datos (Ej: api)
import { DataService }                from '../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators, FormGroup} from "@angular/forms";

export interface DialogData {
  form: FormGroup;
  username:string;
  password:string;
  name:string;
  type:boolean;
  cbu:string;
/*  concepto:{
    nombre:string;
    valor: number;
  }[] = [];*/
  diaMesLiquidacionMensual: number;
  diaPrimerQuincena: number;
  diaSegundaQuincena: number;
  diaSemana: string;
}


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
      form: FormGroup;
      appTitle = 'Liquidator 3000';

      //DATOS DEL USUARIO
      username:string;
      password:string;
      cbu:string;
      name:string;
      type:boolean;
      concepto:{
        nombre:string;
        valor: number;
      }[] = [];
      diaMesLiquidacionMensual: number;
      diaPrimerQuincena: number;
      diaSegundaQuincena: number;
      diaSemana: string;

      constructor(
        private data: DataService,
        public dialog: MatDialog
      ) { }

      ngOnInit() {
        this.form = new FormGroup({
          username: new FormControl( null, [Validators.required]),
          password: new FormControl( null, [Validators.required]),
          cbu: new FormControl( null, [Validators.required]),
          name: new FormControl( null, [Validators.required]),
          type: new FormControl( null, [Validators.required]),
          diaMesLiquidacionMensual: new FormControl( null, [Validators.required]),
          diaPrimerQuincena: new FormControl( null, [Validators.required]),
          diaSegundaQuincena: new FormControl( null, [Validators.required]),
          diaSemana: new FormControl( null, [Validators.required])
        })
      }

      login(): void {
              const dialogRefLogin = this.dialog.open(popUpLogin, {
              width: '400px',
              data: {username: this.username, password: this.password}
            });

            //DESPUES DE CERRARSE GUARDA LA DATA
            dialogRefLogin.afterClosed().subscribe(result => {
              this.username = result.username;
              this.password = result.password;

              //HACE EL POST
              this.data.login(this.username, this.password);

            });
      }

      logOut(): void {
        this.data.isloggin = false;
      }

      myStatistics(): void {
        this.data.getUser();
      }

      getAllEvents(){
        this.data.getAllEvents();
      }

      getAllPosts(){
        this.data.getAllPosts();
      }

      isLoggedIn(): boolean {
        return this.data.isloggin;
      }

      //ESTO ABRE EL POP UP
      signUp(): void {
                const dialogRefSignUp = this.dialog.open(popUpSignUp, {
                width: '500px',
                data: {form: this.form}
              });

              //DESPUES DE CERRARSE GUARDA LA DATA
              dialogRefSignUp.afterClosed().subscribe(result => {
                console.log(result);
                this.username = result.form.get('username').value;
                this.password = result.form.get('password').value;
                this.cbu= result.form.get('cbu').value;
                this.name = result.form.get('name').value;
                this.type = result.form.get('type').value;
                this.diaMesLiquidacionMensual = result.form.get('diaMesLiquidacionMensual').value;
                this.diaPrimerQuincena= result.form.get('diaPrimerQuincena').value;
                this.diaSegundaQuincena= result.form.get('diaSegundaQuincena').value;
                this.diaSemana= result.form.get('diaSemana').value;
                console.log(this.username);
                console.log(result.form.get('username').value);
                //HACE EL POST
                this.data.signUp(this.username, this.password, this.cbu,this.name, this.type,this.diaMesLiquidacionMensual, this.diaPrimerQuincena,this.diaSegundaQuincena,this.diaSemana);

              });
        }

}


//POP UP DEL SIGNUP
@Component({
selector: 'popUpSignUp',
templateUrl: 'popUpSignUp.html',
})
export class popUpSignUp {
    form:FormGroup;
    constructor(

      public dialogRef: MatDialogRef<popUpSignUp>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.form = data.form;
      }
}

//POP UP DEL LOGIN
@Component({
  selector: 'popUpLogin',
  templateUrl: 'popUpLogin.html',
  })
  export class popUpLogin {
      constructor(
        public dialogRef: MatDialogRef<popUpLogin>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  }
