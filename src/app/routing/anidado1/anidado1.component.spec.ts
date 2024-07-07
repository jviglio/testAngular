import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anidado1Component } from './anidado1.component';

describe('Anidado1Component', () => {
  let component: Anidado1Component;
  let fixture: ComponentFixture<Anidado1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anidado1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Anidado1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
