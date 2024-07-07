import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anidado2Component } from './anidado2.component';

describe('Anidado2Component', () => {
  let component: Anidado2Component;
  let fixture: ComponentFixture<Anidado2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anidado2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Anidado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
