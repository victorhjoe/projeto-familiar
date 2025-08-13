import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormFamiliarComponent } from '../app/pages/form-familiar/form-familiar.component';

describe('FormFamiliarComponent - Criação', () => {
  it('deve iniciar com isEditMode false', () => {
    TestBed.configureTestingModule({
      imports: [FormFamiliarComponent, HttpClientModule],
      providers: [provideRouter([])]
    });

    const fixture = TestBed.createComponent(FormFamiliarComponent);
    const comp = fixture.componentInstance;

    expect(comp.isEditMode()).toBe(false);
  });
});
