// import { Component, OnInit } from '@angular/core';
// import { MesaService } from '../../services/mesa.service';
// import { Mesa } from '../../models/mesa.model';

// @Component({
//   selector: 'app-mesa',
//   templateUrl: './mesa.component.html',
// })
// export class MesaComponent implements OnInit {
//   mesas: Mesa[] = [];
//   mesaForm: Mesa = { mesa: 0, responsavel: '' };
//   editando: boolean = false;

//   constructor(private mesaService: MesaService) {}

//   ngOnInit() {
//     this.carregarMesas();
//   }

//   carregarMesas() {
//     this.mesaService.listarMesas().subscribe((data) => (this.mesas = data));
//   }

//   salvar() {
//     if (this.editando) {
//       this.mesaService.atualizarMesa(this.mesaForm).subscribe(() => {
//         this.limparForm();
//         this.carregarMesas();
//       });
//     } else {
//       this.mesaService.adicionarMesa(this.mesaForm).subscribe(() => {
//         this.limparForm();
//         this.carregarMesas();
//       });
//     }
//   }

//   editar(mesa: Mesa) {
//     this.mesaForm = { ...mesa };
//     this.editando = true;
//   }

//   deletar(id: number) {
//     this.mesaService.deletarMesa(id).subscribe(() => this.carregarMesas());
//   }

//   limparForm() {
//     this.mesaForm = { mesa: 0, responsavel: '' };
//     this.editando = false;
//   }
// }
