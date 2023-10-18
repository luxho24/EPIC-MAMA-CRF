import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario4Component } from './formulario4.component';

describe('Formulario4Component', () => {
  let component: Formulario4Component;
  let fixture: ComponentFixture<Formulario4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Formulario4Component]
    });
    fixture = TestBed.createComponent(Formulario4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
