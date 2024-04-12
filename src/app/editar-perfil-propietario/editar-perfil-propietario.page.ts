import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ConexionService } from '../services/conexion.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil-propietario',
  templateUrl: './editar-perfil-propietario.page.html',
  styleUrls: ['./editar-perfil-propietario.page.scss'],
})
export class EditarPerfilPropietarioPage implements OnInit {

  @Input() propietario!: Partial<any>

  constructor(private modalCtrl: ModalController,
              private conexion:ConexionService,
              private toastController:ToastController) { }

  ngOnInit() {
    this.editarPerfilPropietario();
  }

  form = new FormGroup({
    correo_P: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    celular_P: new FormControl('', [
      Validators.minLength(10),
      Validators.required,
      Validators.pattern(/^(?=.*[0-9])/)
    ])
  })

  onSubmit = () => {
      const data = {
        pk_cedulaP: parseInt(this.propietario['pk_cedulaP']),
        correo_P: this.form.value.correo_P,
        celular_P: this.form.value.celular_P
      }
      this.conexion.editarPerfilPropietario(data).subscribe(
        data => {
          console.log('Registro actualizado')
          this.closeModal()
          this.perfilActualizado
        }, error => {
          console.log('No se pudo actualizar')
        }
      )
  }

  async closeModal(){
    this.modalCtrl.dismiss(null, 'closed')
  }

  editarPerfilPropietario(){
      this.form.patchValue(
        {
          correo_P: this.propietario['correo_P'],
          celular_P: this.propietario['celular_P']
        }
      )
  }

  async perfilActualizado(position: 'top') {
    const toast = await this.toastController.create({
      message : 'Datos del perfil actualizados exitosamente',
      duration : 3000,
      position : position,
    });

    await toast.present();
  }
  

}
