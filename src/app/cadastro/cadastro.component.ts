import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Viagem } from '../app.component';
import { ListagemComponent } from '../listagem/listagem.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  item: Viagem | undefined;
  cadastroForm: FormGroup;
  constructor(private router: Router, private builder: FormBuilder) {
    this.cadastroForm = builder.group({
      destino: ['', Validators.required],
      tipo: ['', [Validators.required]],
      dataChegada: ['', [Validators.required]],
      dataSaida: ['', Validators.required],
      valor: ['', Validators.required],
      qtdPessoas: ['', Validators.required]
    })
  }
  cadastrarViagem() {
    var viagemObj = this.cadastroForm.value;
    var maiorId: number;
    if(ListagemComponent.viagens.length > 0)
      maiorId = ListagemComponent.viagens.reduce((a, b) => (a.id > b.id) ? a : b).id;
    else
      maiorId = 0;
    var viagem = new Viagem(
      maiorId + 1,
      viagemObj.destino,
      viagemObj.tipo,
      viagemObj.dataChegada,
      viagemObj.dataSaida,
      viagemObj.valor,
      viagemObj.qtdPessoas
    );
    ListagemComponent.viagens.push(viagem);
    this.router.navigateByUrl('/');
  }
}
