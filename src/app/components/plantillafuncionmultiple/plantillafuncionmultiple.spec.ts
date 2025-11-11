import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plantillafuncionmultiple } from './plantillafuncionmultiple';

describe('Plantillafuncionmultiple', () => {
  let component: Plantillafuncionmultiple;
  let fixture: ComponentFixture<Plantillafuncionmultiple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Plantillafuncionmultiple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plantillafuncionmultiple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
