import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'home/:user', component : ListadoComponent},
  {path : 'detalle', component : DetalleComponent},
  {path : 'sobre-nosotros', component : SobreNosotrosComponent},
  {path : 'contacto', component : ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
