import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LectorqrComponent } from './lectorqr/lectorqr.component';
import { ListarViajesComponent } from './listar-viajes/listar-viajes.component';

// APP_ROUTES
const routes: Routes = [
  { path: '', component: LectorqrComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistrarseComponent },
  { path: 'viajes', component: ListarViajesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 