import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ListproductosComponent } from './componentes/listproductos/listproductos.component';
import { AddEditProductoComponent } from './componentes/add-edit-producto/add-edit-producto.component';

const routes: Routes = [
  {path:'', component: ListproductosComponent},
  {path:'add', component: AddEditProductoComponent},
  {path:'editar/:id', component: AddEditProductoComponent},
  {path:'**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
