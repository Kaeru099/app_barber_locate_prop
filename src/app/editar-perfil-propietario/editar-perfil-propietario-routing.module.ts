import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfilPropietarioPage } from './editar-perfil-propietario.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfilPropietarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfilPropietarioPageRoutingModule {}
