import { Viagem } from './../app.component';
import { ListagemComponent } from './../listagem/listagem.component';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent {
  id: number;
  item: Viagem;
  constructor(private activatedRoute : ActivatedRoute) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.item = ListagemComponent.viagens.find(e => e.id == this.id)!;
  }
}
