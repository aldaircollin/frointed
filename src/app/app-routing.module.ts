import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { RegistrarComponent } from './producto/registrar/registrar.component';
import { EditarComponent } from './producto/editar/editar.component';
import { DetalleComponent } from './producto/detalle/detalle.component';


const routes: Routes = [
  {
    path:'productos',
    component: ProductoComponent
  },

  {
    path:'productos/registrar',
    component: RegistrarComponent
  },

  {path : 'productos/actualizar/:id',
  component : EditarComponent
  },

  {path : 'productos/detalles/:id',
  component : DetalleComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
