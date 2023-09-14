import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { Error404Component } from './componentes/error404/error404.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  //{ path: "", redirectTo: "/bienvenido", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  //{ path: "registrar-usuario", component: RegistrarUsuarioComponent },
  { path: "quien-soy", component: QuienSoyComponent },
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
