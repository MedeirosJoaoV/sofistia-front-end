import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Mesa } from '../models/mesa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MesaService {
  private apiUrl = 'http://localhost/Sofistia/Desenvolvimento.Sofistia/desenvolvimento-back-end/api/crud-mesa.php';

  constructor(private http: HttpClient) {}

  // Lista mesas disponíveis (sem responsável)
  listarMesasDisponiveis(): Observable<Mesa[]> {
    const params = new HttpParams().set('disponiveis', '1');
    return this.http.get<Mesa[]>(this.apiUrl, { params });
  }

  // Atualiza o responsável pela mesa
  atualizarMesa(mesa: Mesa): Observable<any> {
    return this.http.put(this.apiUrl, mesa);
  }
}
