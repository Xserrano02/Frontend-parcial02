import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eleccion } from 'src/app/model/eleccion.model';  // Asegúrate de ajustar la ruta según donde esté tu modelo

@Injectable({
  providedIn: 'root'
})
export class EleccionService {

  private baseUrl = 'http://localhost:7070/api/Eleccions';

  constructor(private http: HttpClient) { }

  getElecciones(): Observable<Eleccion[]> {
    return this.http.get<Eleccion[]>(`${this.baseUrl}/index`);
  }
}
