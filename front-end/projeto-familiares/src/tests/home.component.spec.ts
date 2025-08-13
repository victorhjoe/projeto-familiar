import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { HomeComponent } from '../app/pages/home/home.component';
import { FamiliaresService } from '../app/services/api/familiares.service';
import { routes } from '../app/app.routes';

describe('HomeComponent - Lista', () => {
  it('deve criar o componente e carregar familiares', () => {
    const mockService = {
      httpListFamiliares$: () => of([{ id: '1' }])
    };

    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideRouter(routes),
        { provide: FamiliaresService, useValue: mockService }
      ]
    });

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const comp = fixture.componentInstance;

    expect(comp).toBeTruthy();
    expect(comp.familiares()!.length).toBe(1);
  });
});
