import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private URL = 'http://localhost:3000' // cambiar

  constructor(
    private http: HttpClient
    ) { }

    materialCrear(material: object) {
      return this.http.post<any>(this.URL + '/api/materiales', material);
    }

    materialEliminar(id : string){
      return this.http.delete<any>(this.URL + '/api/materiales/' + id);
    }

    materialModificar(id: string, material: object){
      return this.http.put<any>(this.URL + '/api/materiales/' + id, material);
    }

    materialMostrar(){
      return this.http.get<any>(this.URL + '/api/materiales/');
    }

    materialAgregarEtiqueta(id : string, etiquetas : any){
      return this.http.put<any>(this.URL + '/api/materiales/Etiqueta/' + id, etiquetas)
    }

  }