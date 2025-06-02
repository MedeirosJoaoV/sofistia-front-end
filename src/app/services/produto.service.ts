// src/app/services/produto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost/Sofistia/Desenvolvimento.Sofistia/desenvolvimento-back-end/api/crud-produtos.php';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data || [])
    );
  }
}
