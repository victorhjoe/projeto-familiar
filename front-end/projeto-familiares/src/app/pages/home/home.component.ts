import { Component, inject, OnInit, signal } from '@angular/core';
import { ActionButtonsComponent } from '../../components/action-buttons/action-buttons.component';
import { FamiliaresService } from '../../services/api/familiares.service';
import { IFamiliar } from '../../interfaces/iFamiliar';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ActionButtonsComponent, RouterLink, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  #familiaresService = inject(FamiliaresService);
  #router = inject(Router);
  public familiares = signal<null | IFamiliar[]>(null);

  ngOnInit(): void{
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

  onEdit() {
    console.log('edita');
  }

  onDelete() {
    console.log('exclui');
  }
}
