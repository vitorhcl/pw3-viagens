import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Viagem } from '../app.component';
import { ListagemComponent } from '../listagem/listagem.component';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent {
  id: number;
  item: Viagem;
  constructor(private router: Router, private activatedRoute : ActivatedRoute) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.item = ListagemComponent.viagens.find(e => e.id == this.id)!;
  }
  removerViagem() {
    var index = ListagemComponent.viagens.indexOf(this.item);
    if (index !== -1) {
      ListagemComponent.viagens.splice(index, 1);
    }
    this.router.navigateByUrl('/');
  }
}
