import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { IFamiliar } from '../../interfaces/iFamiliar';

@Injectable({
  providedIn: 'root'
})
export class FamiliaresService {

  #http = inject(HttpClient);
  #url = signal('http://localhost:3000/familiar');

  public httpListFamiliares$(): Observable<null | Array<IFamiliar>> {
    return this.#http.get<IFamiliar[]>(this.#url());
  }
}
