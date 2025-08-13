import { TestBed } from '@angular/core/testing';
import { FormFamiliarComponent } from '../app/pages/form-familiar/form-familiar.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FamiliaresService } from '../app/services/api/familiares.service';

describe('FormFamiliarComponent (Edit Mode)', () => {
  let component: FormFamiliarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormFamiliarComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: of(new Map([['id', '1']])) } },
        { provide: FamiliaresService, useValue: { getFamiliarById$: () => of({ nome: 'Maria' }) } }
      ]
    });

    const fixture = TestBed.createComponent(FormFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve iniciar com isEditMode = true', () => {
    expect(component.isEditMode()).toBeTrue();
  });

  it('deve carregar dados do familiar no formulário', () => {
    expect(component.familiarForm.value.nome).toBe('Maria');
  });
});
