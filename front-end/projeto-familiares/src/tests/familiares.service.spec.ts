import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FamiliaresService } from '../app/services/api/familiares.service';
import { IFamiliar } from '../app/interfaces/iFamiliar';

describe('FamiliaresService', () => {
  let service: FamiliaresService;
  let httpMock: HttpTestingController;


  const API_URL = 'http://localhost:3000/familiar';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FamiliaresService]
    });
    service = TestBed.inject(FamiliaresService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve buscar a lista de familiares', () => {
    const mockFamiliares: IFamiliar[] = [
      { id: '1', nome: 'João', dataNascimento: new Date(), identidade: '123', identidadeAscendente: '' }
    ];

    service.httpListFamiliares$().subscribe(data => {
      expect(data).not.toBeNull();
      expect(data!.length).toBe(1);
      expect(data).toEqual(mockFamiliares);
    });

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockFamiliares);
  });
});
