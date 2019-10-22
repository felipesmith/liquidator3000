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
  isloggin: boolean;
  username: string;

  //GUARDO LAS LISTAS DE LAS CONSULTAS A LA BASE
  events: any;
  user: any;
  event: any;
  post: any;
  posts: any;

  //**** POSTS (POSTS DE GET/POST) ****//
  postNuevoUsuario = {
    username: '',
    password: '',
    name: '',
    type: false,
    concepto: [{
      nombre:'',
      valor: 0
    }]
  };

  postNuevoEvento ={
    title:'',
    description:'',
    location:'',
    owner: '',
    type:'',
  };

  postNuevoPost ={
    title:'',
    description:'',
    date: new Date(),
    type:'',
  };

  postLogin ={
    username: '',
    password: '',
  };

  //URLS
  urlCreate = 'http://pinamar-api.herokuapp.com/clientes';
  urlLogin = 'https://green-mind.herokuapp.com/users/login';

  constructor(private http: HttpClient) { }


  //**** POSTS *****//

  signUp(username:string, password:string, name:string, type:boolean, concepto: Array<any> ) {
    this.postNuevoUsuario.username = username;
    this.postNuevoUsuario.password = password;
    this.postNuevoUsuario.name = name;
    this.postNuevoUsuario.type = type;
    this.postNuevoUsuario.concepto = concepto;
    this.http.post(this.urlCreate, this.postNuevoUsuario).toPromise().then(response => {
      console.log(response)
    });
  }

  login(username:string, password:string) {

    this.postLogin.username = username;
    this.postLogin.password = password;
    //NECESITA UN INTERFACE PARA INTERPRETAR LA RESPUESTA
    this.http.post<UserPostResponse>(this.urlLogin, this.postLogin).toPromise().then(response => {
      console.log(response.User);
      this.isloggin = response.User;
      this.username = username;
    });

  }

  createEvent(title:string, description:string, location: string,  type:string, owner:string) {

    let url = 'https://green-mind.herokuapp.com/events/create';
    this.postNuevoEvento.title = title;
    this.postNuevoEvento.description = description;
    this.postNuevoEvento.location = location;
    this.postNuevoEvento.owner = owner;
    this.postNuevoEvento.type = type;
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
    let obs = this.http.get('https://green-mind.herokuapp.com/events/all/');
    return obs.subscribe((response) => {
      this.events = response;
      console.log(this.events)
    });
  }

  getAllPosts(){
    let obs = this.http.get('https://green-mind.herokuapp.com/posts/all/');
    return obs.subscribe((response) => {
      this.posts = response;
      console.log(this.posts)
    });
  }

  getEvent(id){
    let obs = this.http.get('https://green-mind.herokuapp.com/events/event/' + id);
    return obs.subscribe((response) => {
      this.event = response;
      console.log(this.event)
    });
  }
}
