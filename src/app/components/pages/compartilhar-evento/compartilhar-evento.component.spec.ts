import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilharEventoComponent } from './compartilhar-evento.component';

describe('CompartilharEventoComponent', () => {
  let component: CompartilharEventoComponent;
  let fixture: ComponentFixture<CompartilharEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartilharEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartilharEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
