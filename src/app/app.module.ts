import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { ProdutoService } from './services/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { Mesa } from './models/mesa.model';
import { MesaService } from './services/mesa.service';

@NgModule({
  declarations: [AppComponent , HomeComponent, CardapioComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [ProdutoService, MesaService]
})
export class AppModule {}
