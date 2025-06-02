import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private apiUrl = 'http://localhost/Sofistia/Desenvolvimento.Sofistia/desenvolvimento-back-end/api/crud-carrinho.php';

  constructor(private http: HttpClient) {}

  adicionarProdutoAoCarrinho(id_produto: number, quantidade: number, mesa: number, totalValor: number) {
    return this.http.post(this.apiUrl, {
      id_produto,
      quantidade,
      totalValor,
      mesa
    });
  }
}
