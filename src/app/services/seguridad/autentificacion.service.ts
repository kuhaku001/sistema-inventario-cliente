import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private URL = 'http://localhost:3000' // cambiar

  isregister = false;

  constructor(
    private http: HttpClient
    ) { }

  login(usuario: object) {
    console.log(usuario)
    return this.http.post<any>(this.URL + '/api/usuario/', usuario); 
  }

  register(usuario: object) {
    console.log(usuario)
    return this.http.post<any>(this.URL + '/api/usuario/register', usuario); 
  }

  loginAdmin(admin: object) {
    return this.http.post<any>(this.URL + '/api/usuario/admin', admin); 
  }

  autoLogin(){
    return this.http.post<any>(this.URL + '/api/usuario/token', {})
  }

  loggedIn() : Boolean{
    if(localStorage.getItem('token')){ 
      return true
    } else {
      return false
    }
  }

  obtenerToken(){
    return localStorage.getItem('token');
  }

}
