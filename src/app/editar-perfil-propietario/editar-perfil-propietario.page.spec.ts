import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPerfilPropietarioPage } from './editar-perfil-propietario.page';

describe('EditarPerfilPropietarioPage', () => {
  let component: EditarPerfilPropietarioPage;
  let fixture: ComponentFixture<EditarPerfilPropietarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilPropietarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
