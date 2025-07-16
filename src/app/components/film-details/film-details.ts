import { Component, OnInit } from '@angular/core';
import { Filme } from '../Int_Filmes';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-film-details',
  standalone: false,
  templateUrl: './film-details.html',
  styleUrl: './film-details.css'
})
export class FilmDetails implements OnInit {
  filme!: Filme;

  constructor(
    private route: ActivatedRoute,
    private filmeService: Service
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
  
    if (idParam !== null && !isNaN(Number(idParam))) {
      const id = Number(idParam);
      this.filmeService.metodoGetID(id).subscribe({
        next: (dados) => this.filme = dados,
        error: (err) => console.error('Erro ao buscar filme:', err)
      });
    } else {
      console.error('ID inválido na URL:', idParam);
    }
  }
  
}
