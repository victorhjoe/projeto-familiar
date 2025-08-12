import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FamiliaresService } from '../../services/api/familiares.service';
import { IFamiliar } from '../../interfaces/iFamiliar';

@Component({
  selector: 'app-form-familiar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './form-familiar.component.html',
  styleUrl: './form-familiar.component.css'
})
export class FormFamiliarComponent implements OnInit {
  #familiarService = inject(FamiliaresService);
  #router = inject(Router);
  #routerActivated = inject(ActivatedRoute);

  public isEditMode = signal<boolean>(false);
  public familiarForm!: FormGroup;
  public id!: string | null;

  ngOnInit(): void{
    this.familiarForm = new FormGroup({
      nome: new FormControl(''),
      dataNascimento: new FormControl(new Date()),
      identidade: new FormControl(''),
      identidadeAscendente: new FormControl(null)
    });

    this.#routerActivated.paramMap.subscribe(params => {
      this.id = params.get('id');

      this.isEditMode.set(!!this.id);

      this.familiarForm.reset({
        nome: '',
        dataNascimento: new Date(),
        identidade: '',
        identidadeAscendente: null
      });

      if(this.isEditMode() && this.id) {
      this.#familiarService.getFamiliarById$(this.id).subscribe({
        next: (next) => {
          this.familiarForm.patchValue(next);
        },
        error: (error) => console.log(error)
      })
    }
    });
  }

  salvar() {
    const formValue = this.familiarForm.value;

    const familiarParaEnviar: IFamiliar = {
      nome: formValue.nome ?? '',
      dataNascimento: formValue.dataNascimento ?? new Date(),
      identidade: formValue.identidade ?? '',
      identidadeAscendente: formValue.identidadeAscendente ?? '', 
    };

    if(this.isEditMode()) {
      familiarParaEnviar.id = this.id;

      this.#familiarService.putFamiliar(familiarParaEnviar).subscribe({
        next: (next) => {
          if(next) {
            this.#router.navigate(['']);
          }
        }
      });
    } else {
      this.#familiarService.postFamiliar$(familiarParaEnviar).subscribe({
        next: (next) => {
          if(next) {
            this.#router.navigate(['']);
          }
        },
        error: (e) => console.error('Erro ao salvar', e)
      });
    }
  }
}
