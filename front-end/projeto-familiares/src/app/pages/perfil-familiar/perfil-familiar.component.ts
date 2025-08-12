import { Component, inject, OnInit } from '@angular/core';
import { FamiliaresService } from '../../services/api/familiares.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IFamiliar } from '../../interfaces/iFamiliar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-perfil-familiar',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './perfil-familiar.component.html',
  styleUrl: './perfil-familiar.component.css'
})
export class PerfilFamiliarComponent implements OnInit {
  #familiaresService = inject(FamiliaresService);
  #router = inject(ActivatedRoute);

  familiar: IFamiliar | null = null;

  ngOnInit(): void {
    const id: string = String(this.#router.snapshot.paramMap.get('id'));
    this.#familiaresService.getFamiliarById$(id).subscribe({
      next: (data) => (this.familiar = data),
      error: (err) => console.error(err),
    });
  }

}
