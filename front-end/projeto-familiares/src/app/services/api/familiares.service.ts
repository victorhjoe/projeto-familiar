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

  public getFamiliarById$(id: string) {
    return this.#http.get<IFamiliar>(`${this.#url()}/${id}`);
  }

  public postFamiliar$(familiar: IFamiliar) {
    return this.#http.post<IFamiliar>(this.#url(), familiar);
  }

  public putFamiliar(familiar: IFamiliar) {
    return this.#http.put<IFamiliar>(`${this.#url()}/${familiar.id}`, familiar)
  }

  public deleteFamiliar$(id: string) {
    return this.#http.delete(`${this.#url()}/${id}`)
  }
}
