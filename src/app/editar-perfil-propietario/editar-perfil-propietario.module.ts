import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfilPropietarioPageRoutingModule } from './editar-perfil-propietario-routing.module';

import { EditarPerfilPropietarioPage } from './editar-perfil-propietario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfilPropietarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarPerfilPropietarioPage]
})
export class EditarPerfilPropietarioPageModule {}
