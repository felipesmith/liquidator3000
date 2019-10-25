import { Injectable }       from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';


interface UserPostResponse {
  User: boolean
};

@Injectable({
  providedIn: 'root'
})



export class DataService {

  date = new Date();

  //DATOS DE USUARIO (SINGLETON)
  isloggin: any;
  username: string;
  clientName: string;
  //GUARDO LAS LISTAS DE LAS CONSULTAS A LA BASE
  events: any;
  user: any;
  event: any;
  post: any;
  posts: any;
  employee:any;
  //**** POSTS (POSTS DE GET/POST) ****//
  postNuevoUsuario = {
    cuit: '',
    password: '',
    cbu:'',
    nombre: '',
    fisico: false,
    diaMesLiquidacionMensual:0,
    diaPrimerQuincena:0,
    diaSegundaQuincena:0,
    diaSemana  :''

  };

  postNuevoEvento ={
    dni:'',
    cbu:'',
    cuitEmpleado:'',
    nombre:'',
    direccion:'',
    puesto:'',
    fechaIngreso: {},
    cuit:'',
    tipoLiquidacion: '',
    tipo: '',
    monto: 0,
    diasContratados: 0,
    conceptos: [{
      nombre:'',
      valor: 0,
      tipo:''
    }]

  };
  liquidaciones:any;
  concepto:any;
  novedad:any;
  facturas:any;
  informes:any;

  postNuevoPost ={
    title:'',
    description:'',
    date: new Date(),
    type:'',
  };

  postLogin ={
    cuit: '',
    password: '',
  };

  //URLS
  urlCreate = 'http://pinamar-api.herokuapp.com/clientes/';
  urlLogin = 'http://pinamar-api.herokuapp.com/clientes/login/'

  constructor(private http: HttpClient) { }


  //**** POSTS *****//

  signUp(username:string, password:string, cbu:string, name:string, type:boolean,diaMesLiquidacionMensual:number, diaPrimerQuincena:number,diaSegundaQuincena:number,diaSemana:string  ) {
    this.postNuevoUsuario.cuit = username;
    this.postNuevoUsuario.password = password;
    this.postNuevoUsuario.cbu = cbu;
    this.postNuevoUsuario.nombre = name;
    this.postNuevoUsuario.fisico = type;
    //this.postNuevoUsuario.concepto = concepto;
    this.postNuevoUsuario.diaMesLiquidacionMensual = diaMesLiquidacionMensual;
    this.postNuevoUsuario.diaPrimerQuincena = diaPrimerQuincena;
    this.postNuevoUsuario.diaSegundaQuincena = diaSegundaQuincena;
    this.postNuevoUsuario.diaSemana = diaSemana;
    //this.username = username;
    console.log(this.postNuevoUsuario);
    this.http.post(this.urlCreate, this.postNuevoUsuario).toPromise().then(response => {
      console.log(response)
    });
  }

  login(username:string, password:string) {
     var  urlLogin = this.urlLogin+username+'/'+password;
    this.postLogin.cuit = username;
    this.postLogin.password = password;
    console.log(this.postLogin.cuit,this.postLogin.password);
    //NECESITA UN INTERFACE PARA INTERPRETAR LA RESPUESTA

    let obs = this.http.get(urlLogin);
    return obs.subscribe((response) => {
      console.log(response);
      this.isloggin = response;
      this.clientName = response.nombre;
      console.log(this.clientName);
      this.username = username;
      console.log(this.isloggin)
    });
  }

  createEmployee(dni:string, cbu:string, cuit:string, nombre:string, direccion: string,  puesto:string, fechaIngreso:Date, tipoLiquidacion:string, tipo:string, monto:number, conceptos: Array<any>, diasContratados: number ) {

    let url = 'http://pinamar-api.herokuapp.com/clientes/empleados/'+tipo+'/'+monto+'/'+this.username+'/'+diasContratados;
    console.log(conceptos);
    this.postNuevoEvento.dni = dni;
    this.postNuevoEvento.cbu = cbu;
    this.postNuevoEvento.cuitEmpleado= cuit;
    this.postNuevoEvento.nombre = nombre;
    this.postNuevoEvento.direccion = direccion;
    this.postNuevoEvento.puesto = puesto;
    this.postNuevoEvento.fechaIngreso = fechaIngreso;
    this.postNuevoEvento.tipoLiquidacion = tipoLiquidacion;
    this.postNuevoEvento.tipo = tipo;
    this.postNuevoEvento.conceptos = conceptos;
    this.postNuevoEvento.monto = monto;
    this.postNuevoEvento.diasContratados = diasContratados;
    this.postNuevoEvento.cuit = cuit;
    console.log(this.postNuevoEvento);
    this.http.post(url, this.postNuevoEvento).toPromise().then(response => {
      console.log(response);
    });
  }

  createPost(title:string, description:string, date:Date, type:string) {

    let url = 'https://green-mind.herokuapp.com/posts/create';
    this.postNuevoPost.title = title;
    this.postNuevoPost.description = description;
    this.postNuevoPost.date = date;
    this.postNuevoPost.type = type;
    this.http.post(url, this.postNuevoPost).toPromise().then(response => {
      console.log(response);
    });
  }

  addConcepto(concepto: any) {
    let url = 'http://pinamar-api.herokuapp.com/clientes/empleados/'+this.employee.id+'/conceptos';
    console.log(url);
    this.concepto = concepto;
    console.log(this.concepto);
    this.http.post(url, this.concepto).toPromise().then(response => {
      console.log(response);
    });
  }


  addNovedad(novedad: any) {
    let url = 'http://pinamar-api.herokuapp.com/clientes/empleados/'+this.employee.id+'/novedades';
    console.log(url);
    this.novedad = novedad;
    console.log(this.novedad);
    this.http.post(url, this.novedad).toPromise().then(response => {
      console.log(response);
    });
  }

  liquidar(){
    let url= 'http://pinamar-api.herokuapp.com/clientes/sueldos'
    console.log(url);
    this.http.post(url,'').toPromise().
    then(response => {
      console.log(response);
      this.liquidaciones= response;
      console.log(this.liquidaciones);
    }).then(result  => {
      console.log('Entro al then');
      return this.callBanco();
    }).then((informes:any)  => {
      console.log('Entro al segundo then');
      console.log(informes);
      console.log(this.informes+'xd');
      console.log('Entro a tu vieja');
      this.transferir(informes);
    })
    .catch(error =>{
      console.error(error);
    });

  }

  facturar() {
    let obs = this.http.get('http://pinamar-api.herokuapp.com/clientes/facturas/'+this.username);
    return obs.subscribe((response) => {
      this.facturas = response;
      console.log(this.facturas)
    });
  }

  callBanco(){
    return this.http.get('http://pinamar-api.herokuapp.com/clientes/informes').toPromise().then((response) => {
      this.informes = response;
      console.log(this.informes);
      console.log('lo de arriba son los informes');
      return this.informes;
    });
  }

    
  transferir(informes:any[]){
    let url = 'https://secret-mesa-48951.herokuapp.com/Banco/pagar/varios';
    let urlCobro = 'https://secret-mesa-48951.herokuapp.com/Banco/cobrar/varios';
    console.log(this.informes.cobro);
    this.http.post(urlCobro, this.informes.cobro).toPromise().then(response => {
      console.log(response);
    });

    console.log(this.informes.pago);
    this.informes.pago.forEach(element => {
      this.http.post(url, element).toPromise().then(response => {
        console.log(element);
        console.log(response);
        console.log('comollegamoaca');
      });
  
    });
    /*this.http.post(url, this.informes).toPromise().then(response => {
      console.log(response);
    });*/
  }


    misLiquidaciones() {
    let obs = this.http.get('http://pinamar-api.herokuapp.com/clientes/liquidaciones-cliente/' + this.username);
    return obs.subscribe((response) => {
      this.liquidaciones = response;
      console.log(this.liquidaciones)
    });
  }




  //**** GETS ****//

  getAllUsers() {
    let obs = this.http.get('https://green-mind.herokuapp.com/users/all');
    return obs.subscribe((response) => console.log(response));
  }

  getUser() {
    let obs = this.http.get('https://green-mind.herokuapp.com/users/user/' + this.username);
    return obs.subscribe((response) => {
      this.user = response;
      console.log(this.user)
    });
  }

  getAllEvents(){
    let obs = this.http.get('http://pinamar-api.herokuapp.com/clientes/');
    return obs.subscribe((response) => {
      this.events = response;
      console.log(this.events)
    });
  }

  getAllPosts(){
    let obs = this.http.get('http://pinamar-api.herokuapp.com/clientes/empleados-cliente/'+ this.username);
    return obs.subscribe((response) => {
      this.posts = response;
      console.log(this.posts)
    });
  }

  getEmployee(id){
    let obs = this.http.get('http://pinamar-api.herokuapp.com/clientes/empleados/' + id);
    return obs.subscribe((response) => {
      this.employee = response;
      console.log(this.employee);
    });
  }
}
