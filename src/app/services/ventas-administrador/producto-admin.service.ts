import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoAdminService {

  private URL = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  productoCrear(producto: object){
    return this.http.post<any>(this.URL + '/api/productos/', producto);
  }

  productoEliminar(id: string){
    return this.http.delete<any>(this.URL + '/api/productos/' + id);
  }

  productoModificar(id: string, producto: object){
    return this.http.put<any>(this.URL + '/api/productos/'+ id, producto);
  }

  productoMostrar(){
    return this.http.get<any>(this.URL + '/api/productos/');
  }

  productoDisponiblidad(id: string, disponibilidad: boolean){
    return this.http.put<any>(this.URL + '/api/productos/disponibilidad'+ id, disponibilidad);
  }

} 