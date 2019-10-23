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
    nombre: '',
    fisico: false
  };

  postNuevoEvento ={
    dni:'',
    cbu:'',
    nombre:'',
    direccion:'',
    puesto:'',
    fechaIngreso: {},
    cuit:'',
    tipoLiquidacion: '',
    tipo: '',
    monto: 0,
    conceptos: [{
      nombre:'',
      valor: 0,
      tipo:''
    }]

  };

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

  signUp(username:string, password:string, name:string, type:boolean ) {
    this.postNuevoUsuario.cuit = username;
    this.postNuevoUsuario.password = password;
    this.postNuevoUsuario.nombre = name;
    this.postNuevoUsuario.fisico = type;
    //this.postNuevoUsuario.concepto = concepto;
    this.username = username;
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
      this.username = username;
      console.log(this.isloggin)
    });
  }

  createEmployee(dni:string, cbu:string, nombre:string, direccion: string,  puesto:string, fechaIngreso:Date, tipoLiquidacion:string, tipo:string, monto:number, conceptos: Array<any> ) {

    let url = 'http://pinamar-api.herokuapp.com/clientes/empleados/'+tipo+'/'+monto+'/'+this.username;
    console.log(conceptos);
    this.postNuevoEvento.dni = dni;
    this.postNuevoEvento.cbu = cbu;
    this.postNuevoEvento.nombre = nombre;
    this.postNuevoEvento.direccion = direccion;
    this.postNuevoEvento.puesto = puesto;
    this.postNuevoEvento.fechaIngreso = fechaIngreso;
    this.postNuevoEvento.tipoLiquidacion = tipoLiquidacion;
    this.postNuevoEvento.tipo = tipo;
    this.postNuevoEvento.conceptos = conceptos;
    this.postNuevoEvento.monto = monto;
    this.postNuevoEvento.cuit = this.username;
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
