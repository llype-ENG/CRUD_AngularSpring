import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Filme } from '../Int_Filmes';

@Component({
  selector: 'app-list-films',
  standalone: false,
  templateUrl: './list-films.html',
  styleUrl: './list-films.css'
})
export class ListFilms implements OnInit{

  filmes:Filme[] = [];

  constructor(private filmeService:Service){}

  ngOnInit(): void {
    this.filmeService.metodoGet().subscribe(dados => this.filmes = dados);
    }

  Deletar(ID: number): void{
    this.filmeService.metodoDel(ID).subscribe({
      next: () => {
        this.filmes = this.filmes.filter(filme => filme.id !== ID);
        console.log('Filme deletado com sucesso e removido da lista');
      },
      error: (err) => {
        console.error('Erro ao deletar filme:', err);
      }
    });
  }
 

}
