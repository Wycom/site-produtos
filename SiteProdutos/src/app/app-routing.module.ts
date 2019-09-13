import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormContactosComponent } from './form-contactos/form-contactos.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';


const routes: Routes = [
  {path: 'nav-bar', component: NavBarComponent},
  {path: 'form_contactos', component: FormContactosComponent},
  {path: 'pagina-produto', component: PaginaProdutoComponent},
  {path: 'pagina-inicial', component: PaginaInicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
