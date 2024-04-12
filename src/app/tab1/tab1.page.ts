import { Component } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  barberia: any

  constructor(private conexion: ConexionService) {}

  verPerfilBarberia() {
    this.conexion.consultaPerfilBarberia().subscribe(
      data => {
          this.barberia = data
      }
    )
  } 

  ngOnInit() {
    this.verPerfilBarberia()
  }

  doRefresh(event: any){
    this.conexion.consultaPerfilBarberia().subscribe(
      response => {
        this.barberia = response
        event.target.complete();
      }
    )
  }

}
