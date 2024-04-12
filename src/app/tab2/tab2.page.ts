import { Component } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  barberos: any

  constructor(private conexion: ConexionService,
              private alertCtrl: AlertController,
              private toastController: ToastController,
              private modalCtrl: ModalController) {}

  administrarBarberos = false;
  textoBoton = 'Administrar empleados';

  toggleElements() {
    this.administrarBarberos = !this.administrarBarberos;
    this.textoBoton = this.administrarBarberos ? 'Hecho' : 'Administrar empleados';
  }

  verBarberos() {
    this.conexion.consultaBarberos().subscribe(
      data => {
        this.barberos = data
      }
    )
  } 

  ngOnInit() {
    this.verBarberos()
  }

  doRefresh(event: any){
    this.conexion.consultaBarberos().subscribe(
      response => {
        this.barberos = response
        event.target.complete();
      }
    )
  }

  borrarBarbero(fk_cedulaB:any) {
    let remove:any = {}
    remove['fk_cedulaB'] = fk_cedulaB
    this.alertCtrl.create({
      header: 'Eliminar barbero',
      message : '¿Está seguro que desea ELIMINAR?',
      buttons:[
        {text: 'Cancelar'},
        {text: 'Eliminar',
         handler:() => {
          this.conexion.borrarBarbero(remove).subscribe(
            data => {
              this.presentToast()
            }
          )
         },
      },
      ],
    })
    .then((myAlert) => myAlert.present())
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Barbero eliminado',
      duration: 2000
    });
    toast.present();
  }

}
