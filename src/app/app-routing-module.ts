import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListFilms } from './components/list-films/list-films';
import { CriarFilms } from './components/criar-films/criar-films';
import { FilmDetails } from './components/film-details/film-details';

const routes: Routes = [
{
  path:'filmes', component: ListFilms
},
{
  path:'addfilm', component: CriarFilms
},
{
  path:'filmes/:id', component: FilmDetails
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
