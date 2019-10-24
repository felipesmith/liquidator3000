import { Component, OnInit, Inject }          from '@angular/core';
//El DataService se utiliza para centralizar los datos, se utiliza para enviar y recibir datos (Ej: api)
import { DataService }                from '../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
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
                width: '400px',
                data: {username: this.username, password: this.password, cbu:this.cbu, name:this.name, type:this.type, diaMesLiquidacionMensual:this.diaMesLiquidacionMensual,diaPrimerQuincena:this.diaPrimerQuincena,diaSegundaQuincena: this.diaSegundaQuincena,
              diaSemana:this.diaSemana}
              });

              //DESPUES DE CERRARSE GUARDA LA DATA
              dialogRefSignUp.afterClosed().subscribe(result => {
                this.username = result.username;
                this.password = result.password;
                this.cbu= result.cbu;
                this.name = result.name;
                this.type = result.type;
                this.diaMesLiquidacionMensual = result.diaMesLiquidacionMensual;
                this.diaPrimerQuincena= result.diaPrimerQuincena;
                this.diaSegundaQuincena= result.diaSegundaQuincena;
                this.diaSemana= result.diaSemana;
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
    constructor(
      public dialogRef: MatDialogRef<popUpSignUp>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
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
