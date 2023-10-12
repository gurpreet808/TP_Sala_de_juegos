import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { Error404Component } from './componentes/error404/error404.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SalaChatComponent } from './componentes/sala-chat/sala-chat.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './componentes/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { ColorRaceComponent } from './componentes/color-race/color-race.component';

const routes: Routes = [
  //{ path: "", redirectTo: "/bienvenido", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "quien-soy", component: QuienSoyComponent },
  { path: "sala-chat", component: SalaChatComponent },
  { path: "ahorcado", component: AhorcadoComponent },
  { path: "mayor-menor", component: MayorMenorComponent },
  { path: "preguntados", component: PreguntadosComponent },
  { path: "color-race", component: ColorRaceComponent },
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
