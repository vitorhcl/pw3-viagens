import { DetalharComponent } from './detalhar/detalhar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:ListagemComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'excluir/:id', component:ExcluirComponent},
  {path:'detalhar/:id', component:DetalharComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
