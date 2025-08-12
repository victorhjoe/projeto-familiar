import { Component, inject, OnInit, signal } from '@angular/core';
import { ActionButtonsComponent } from '../../components/action-buttons/action-buttons.component';
import { FamiliaresService } from '../../services/api/familiares.service';
import { IFamiliar } from '../../interfaces/iFamiliar';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ActionButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  #familiaresService = inject(FamiliaresService);
  public familiares = signal<null | IFamiliar[]>(null);

  ngOnInit(): void{
    this.#familiaresService.httpListFamiliares$().subscribe({
      next: (next) => {
        console.log(next)
        this.familiares.set(next);
        console.log('this.familiares', this.familiares());
        
      },
      error: (error) => console.log(error)
    })
  }

  onView() {
    console.log('visualiza');
    
  }

  onEdit() {
    console.log('edita');
  }

  onDelete() {
    console.log('exclui');
  }
}
