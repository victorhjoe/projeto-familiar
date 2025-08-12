import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FamiliaresService } from '../../services/api/familiares.service';
import { IFamiliar } from '../../interfaces/iFamiliar';

@Component({
  selector: 'app-form-familiar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './form-familiar.component.html',
  styleUrl: './form-familiar.component.css'
})
export class FormFamiliarComponent {
  #familiarService = inject(FamiliaresService);
  #router = inject(Router);

  public familiarForm = new FormGroup({
    nome: new FormControl(''),
    dataNascimento: new FormControl(new Date()),
    identidade: new FormControl(''),
    identidadeAscendente: new FormControl(null)
  })



  salvar() {
    const formValue = this.familiarForm.value;

    const familiarParaEnviar: IFamiliar = {
      nome: formValue.nome ?? '',
      dataNascimento: formValue.dataNascimento ?? new Date(),
      identidade: formValue.identidade ?? '',
      identidadeAscendente: formValue.identidadeAscendente ?? '', 
    };

    console.log('Familiar para enviar:', familiarParaEnviar);

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
