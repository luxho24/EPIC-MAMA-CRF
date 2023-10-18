import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario7Component } from './formulario7.component';

describe('Formulario7Component', () => {
  let component: Formulario7Component;
  let fixture: ComponentFixture<Formulario7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Formulario7Component]
    });
    fixture = TestBed.createComponent(Formulario7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
