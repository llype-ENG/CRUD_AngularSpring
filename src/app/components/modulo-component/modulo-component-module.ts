import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ReactiveFormsModule } from '@angular/forms';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Home } from '../home/home';
import { ListFilms } from '../list-films/list-films';

import { AppRoutingModule } from '../../app-routing-module';
import { CriarFilms } from '../criar-films/criar-films';


@NgModule({
  declarations: [
    Header,
    Footer,
    Home,
    ListFilms,
    CriarFilms
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [
    Header,
    Footer,
    Home,
    ListFilms,
    CriarFilms,
    ReactiveFormsModule,
    AppRoutingModule,

    
  ]
})
export class ModuloComponentModule { }
