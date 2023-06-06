import { Component } from '@angular/core';
import { Viagem } from '../app.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  viagens=[
    new Viagem('Acapulco', 'LAZER', new Date(), new Date()),
    new Viagem('Egito (Cairo)', 'LAZER', new Date(), new Date()),
  ]
}
