import { Component, inject, OnInit, signal } from '@angular/core';
import { ActionButtonsComponent } from '../../components/action-buttons/action-buttons.component';
import { FamiliaresService } from '../../services/api/familiares.service';
import { IFamiliar } from '../../interfaces/iFamiliar';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ComfirmModalComponent } from '../../components/comfirm-modal/comfirm-modal.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ActionButtonsComponent, RouterLink, DatePipe, ComfirmModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  #familiaresService = inject(FamiliaresService);
  #router = inject(Router);
  public familiares = signal<null | IFamiliar[]>(null);
  public modalVisible = signal(false);
  public familiarParaExcluir = signal<IFamiliar | null>(null);

  ngOnInit(): void{
    this.carregarFamiliares();
  }

  carregarFamiliares() {
    this.#familiaresService.httpListFamiliares$().subscribe({
      next: (next) => {
        this.familiares.set(next);
      },
      error: (error) => console.log(error)
    })
  }

  onView(item: IFamiliar) {
    this.#router.navigate(['/perfil', item.id]);
  }

  onEdit(item: IFamiliar) {
    this.#router.navigate(['/editar', item.id]);
  }

  confirmaExclusao(item: IFamiliar) {
    this.familiarParaExcluir.set(item);
    this.modalVisible.set(true);
  }

  fecharModal() {
    this.modalVisible.set(false);
    this.familiarParaExcluir.set(null);
  }

  onDelete() {
    const item = this.familiarParaExcluir();

    if(item?.id) {
      this.#familiaresService.deleteFamiliar$(item.id).subscribe({
        next: (next) => {
          this.carregarFamiliares();
          this.fecharModal();
        }
      })
    }
  }
}
