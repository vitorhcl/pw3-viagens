import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-viagens';
}

export class Viagem {
  constructor(destino: string, tipo: string, dataChegada: Date, dataSaida: Date) {
    this.destino = destino;
    this.tipo = tipo;
    this.dataChegada = dataChegada;
    this.dataSaida = dataSaida;
  }
  destino = '';
  tipo = '';
  dataChegada = new Date();
  dataSaida = new Date();
}
