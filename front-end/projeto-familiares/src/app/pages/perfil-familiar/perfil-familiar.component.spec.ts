import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFamiliarComponent } from './perfil-familiar.component';

describe('PerfilFamiliarComponent', () => {
  let component: PerfilFamiliarComponent;
  let fixture: ComponentFixture<PerfilFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilFamiliarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
