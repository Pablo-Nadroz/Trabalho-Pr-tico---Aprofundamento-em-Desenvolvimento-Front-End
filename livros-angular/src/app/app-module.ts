import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LivroLista } from './livro-lista/livro-lista';
import { LivroDados } from './livro-dados/livro-dados';
import { ControleEditoraService } from './controle-editora';
import { ControleLivrosService } from './controle-livros';

@NgModule({
  declarations: [App, LivroLista, LivroDados],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), ControleEditoraService, ControleLivrosService],
  bootstrap: [App],
})
export class AppModule {}
