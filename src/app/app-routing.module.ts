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
import { anonGuard } from './guards/anon.guard';
import { userGuard } from './guards/user.guard';

const routes: Routes = [
  //{ path: "", redirectTo: "/bienvenido", pathMatch: "full" },
  { path: "", component: HomeComponent},
  { path: "login", component: LoginComponent, canActivate: [anonGuard] },
  { path: "registro", component: RegistroComponent, canActivate: [anonGuard] },
  { path: "quien-soy", component: QuienSoyComponent },
  { path: "sala-chat", component: SalaChatComponent, canActivate: [userGuard] },
  { path: "ahorcado", component: AhorcadoComponent, canActivate: [userGuard] },
  { path: "mayor-menor", component: MayorMenorComponent, canActivate: [userGuard] },
  { path: "preguntados", component: PreguntadosComponent, canActivate: [userGuard] },
  { path: "color-race", component: ColorRaceComponent, canActivate: [userGuard] },
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
