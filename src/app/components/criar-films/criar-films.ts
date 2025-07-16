import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../service';


@Component({
  selector: 'app-criar-films',
  templateUrl: './criar-films.html',
  styleUrls: ['./criar-films.css'],
  standalone: false,

})

export class CriarFilms implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: Service) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [''],
      nomeFilme: ['', Validators.required],
      descriFilme: ['', [Validators.required]]
    });
  }

  submit() {
    if (this.formulario.valid) {
      const dados = this.formulario.value;
      console.log('Dados enviados com sucesso!', dados);

      this.postService.metodoPost(dados).subscribe({
        next: (res) => {
          alert('Dados enviados com sucesso!');
          this.formulario.reset();
        },
        error: (err) => {
          console.error('Erro ao enviar dados:', err);
          alert('Erro ao enviar dados, tente novamente.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
