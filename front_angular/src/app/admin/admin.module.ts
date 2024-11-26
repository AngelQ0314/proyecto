import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductoComponent } from './iventario/components/producto/producto.component';
import { CategoriaComponent } from './iventario/components/categoria/categoria.component';
import { ClienteComponent } from './components/cliente/cliente.component';


@NgModule({
  declarations: [
    ProductoComponent,
    CategoriaComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
