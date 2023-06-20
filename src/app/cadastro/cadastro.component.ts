import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Viagem } from '../app.component';
import { ListagemComponent } from '../listagem/listagem.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  item: Viagem | undefined;
  cadastroForm: FormGroup;
  constructor(private builder: FormBuilder) {
    this.cadastroForm = builder.group({
      destino: ['', Validators.required],
      tipo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      dataChegada: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      dataSaida: ['', Validators.required],
      valor: ['', Validators.requiredTrue],
      qtdPessoas: ['', Validators.requiredTrue]
    })
  }
}
