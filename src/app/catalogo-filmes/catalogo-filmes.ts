import { Component } from '@angular/core';


@Component({
  selector: 'app-catalogo-filmes',
  imports: [],
  templateUrl: './catalogo-filmes.html',
  styleUrl: './catalogo-filmes.css',
})
export class CatalogoFilmes {
  filmes: string[] = ['Velozes e Furiosos', 'Carros 2', 'Top gun: Maverick', 'Homem-Aranha', 'Batman'];

  filmeSelecionado = "";
  
  visualizacoes: number = 0;

  novoFilme: string = " ";

  adicionarFilme(event: any){ 
    this.filmes.push(event.target.value);
    event.target.value = '';
  }

  filmeFavorito = false;

  incrementar(){
    this.visualizacoes++;
  }
}
