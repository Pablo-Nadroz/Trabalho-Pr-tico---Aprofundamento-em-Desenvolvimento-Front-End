import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora';
import { ControleLivrosService } from '../controle-livros';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.html',
  styleUrls: ['./livro-dados.css'],
  standalone: false
})
export class LivroDados implements OnInit {
  public livro: Livro = new Livro(0, 0, '', '', []);
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');
    this.livro.codEditora = Number(this.livro.codEditora);
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
