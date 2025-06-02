import { Component, OnInit } from '@angular/core';
import { MesaService } from '../../services/mesa.service';
import { Mesa } from '../../models/mesa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  mesasDisponiveis: Mesa[] = [];
  mesaSelecionada: number | null = null;
  responsavel: string = '';
  erro: string = '';

  constructor(
    private mesasService: MesaService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.carregarMesas();
  }

  carregarMesas() {
    this.mesasService.listarMesasDisponiveis().subscribe((res: any) => {
      if (res.success && res.data) {
        this.mesasDisponiveis = res.data;
      } else {
        this.mesasDisponiveis = [];
      }
    });
  }
  salvarMesa() {
  this.erro = '';
  if (!this.mesaSelecionada || !this.responsavel.trim()) {
    this.erro = 'Selecione a mesa e informe o responsável.';
    return;
  }

  const mesaAtualizada: Mesa = {
    numero: this.mesaSelecionada,
    responsavel: this.responsavel.trim(),
  };

  const mesaParaRedirecionar = this.mesaSelecionada; // Salva o valor da mesa

  this.mesasService.atualizarMesa(mesaAtualizada).subscribe({
    next: () => {
      alert('Mesa atualizada com sucesso!');
      this.carregarMesas(); // Recarrega mesas disponíveis
      this.mesaSelecionada = null;
      this.responsavel = '';
      // Redireciona para a rota do cardápio com o número da mesa correta
      this.router.navigate(['/cardapio', mesaParaRedirecionar]);
    },
    error: () => {
      this.erro = 'Erro ao atualizar mesa.';
    },
  });
}

}
