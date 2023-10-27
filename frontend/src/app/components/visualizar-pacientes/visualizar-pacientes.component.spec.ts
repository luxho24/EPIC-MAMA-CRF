import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPacientesComponent } from './visualizar-pacientes.component';

describe('VisualizarPacientesComponent', () => {
  let component: VisualizarPacientesComponent;
  let fixture: ComponentFixture<VisualizarPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarPacientesComponent]
    });
    fixture = TestBed.createComponent(VisualizarPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
