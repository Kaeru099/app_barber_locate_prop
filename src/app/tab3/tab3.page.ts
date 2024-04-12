import { Component } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { ModalController } from '@ionic/angular';
import { EditarPerfilPropietarioPage } from '../editar-perfil-propietario/editar-perfil-propietario.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  propietario: any

  constructor(private conexion: ConexionService,
              private modalCtrl: ModalController) {}

  verPerfilPropietario() {
    this.conexion.consultaPerfilPropietario().subscribe(
      data => {
        this.propietario = data
      }
    )
  } 

  ngOnInit() {
    this.verPerfilPropietario()
  }

  doRefresh(event: any){
    this.conexion.consultaPerfilPropietario().subscribe(
      response => {
        this.propietario = response
        event.target.complete();
      }
    )
  }

  editarPerfilPropietario(propietario:any){
    this.modalCtrl.create({
      component: EditarPerfilPropietarioPage, componentProps: {propietario}
    })
    .then((modal) => {
      modal.present()
      return modal.onDidDismiss
    })
  }

}
