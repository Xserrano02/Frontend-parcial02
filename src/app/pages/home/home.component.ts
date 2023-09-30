import { Component, OnInit } from '@angular/core';
import { EleccionService } from 'src/app/service/eleccion.service'; // Ajusta la ruta según donde esté tu servicio
import { Eleccion } from 'src/app/model/eleccion.model';  // Ajusta la ruta según donde esté tu modelo

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Eleccion[];

  constructor(private eleccionService: EleccionService) { }

  ngOnInit(): void {
    this.eleccionService.getElecciones().subscribe(response => {
      this.data = response;
    }, error => {
      console.error('Error al obtener los datos:', error);
    });
  }
}

