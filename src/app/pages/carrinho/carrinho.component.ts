// import { Component } from '@angular/core';
// import { CarrinhoService } from '../../services/carrinho.service';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { ProdutoCarrinho } from '../../models/produto-carrinho.model';

// @Component({
//   selector: 'app-carrinho',
//   templateUrl: './carrinho.component.html',
// })
// export class CarrinhoComponent {
//   itens: ProdutoCarrinho[] = [];

//   constructor(
//     public carrinhoService: CarrinhoService,
//     private router: Router,
//     private http: HttpClient,
//   ) {
//     this.itens = this.carrinhoService.getItens();
//   }

//   atualizarQuantidade(id: number, quantidade: number ) {
//     this.carrinhoService.atualizarQuantidade(id, quantidade);
//   }

//   removerProduto(id: number) {
//     this.carrinhoService.removerProduto(id);
//     this.itens = this.carrinhoService.getItens();
//   }

//   limparCarrinho() {
//     this.carrinhoService.limparCarrinho();
//     this.itens = [];
//     this.router.navigate(['/cardapio']);
//   }

//   calcularTotal(): number {
//     return this.carrinhoService.calcularTotal();
//   }

//   finalizarPedido() {
//     const mesa = this.carrinhoService.getMesa();
//     for (const item of this.itens) {
//       const dados = {
//         id_produto: item.id,
//         quantidade: item.quantidade,
//         totalValor: item.preco * item.quantidade,
//         mesa,
//       };

//       this.http.post('http://localhost/seu-caminho/crud-carrinho.php', dados).subscribe();
//     }

//     this.router.navigate(['/pedido']);
//   }
// }
