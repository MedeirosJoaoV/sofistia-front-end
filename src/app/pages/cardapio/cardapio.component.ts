// src/app/pages/cardapio/cardapio.component.ts
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
})
export class CardapioComponent implements OnInit {
  mesa: string = 'Mesa 1'; // simulação da mesa selecionada
  categoriaAtiva = 'pratos';
  produtos: Produto[] = [];
  itens: any[] = [];
  numeroMesa: number | null = null;
  quantidades: { [produtoId: number]: number } = {};

  constructor(
    private produtosService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.produtosService.getProdutos().subscribe((response: Produto[]) => {
      this.produtos = response;
      console.log('Produtos carregados:', response);
    });

    //carregar mesa selecionada
    this.route.paramMap.subscribe((params) => {
      const num = params.get('numeroMesa');
      this.numeroMesa = num ? +num : null;
      console.log('Mesa selecionada:', this.numeroMesa);
      // aqui você pode usar esse número para carregar dados ou fazer o que precisar
    });
  }

  get produtosFiltrados(): Produto[] {
    return this.produtos.filter((p) => p.categoria === this.categoriaAtiva);
  }

  setCategoria(categoria: string) {
    this.categoriaAtiva = categoria;
  }

  adicionarAoCarrinho(produto: Produto) {
  const mesa = this.numeroMesa || 1;
  const quantidade = 1;
  const totalValor = produto.valor * quantidade;

  this.carrinhoService.adicionarProdutoAoCarrinho(produto.id, quantidade, mesa, totalValor).subscribe({
    next: () => {
      if (this.quantidades[produto.id]) {
        this.quantidades[produto.id]++;
        console.log(`Quantidade atualizada para o produto `, mesa, produto.id, quantidade, totalValor);
      } else {
        this.quantidades[produto.id] = 1;
      }
    },
    error: () => alert('Erro ao adicionar ao carrinho'),
  });
}


  totalItens(): number {
    return this.itens.length;
  }

  irPara(route: string) {
    // Exemplo: navegar com Angular router
  }
}
