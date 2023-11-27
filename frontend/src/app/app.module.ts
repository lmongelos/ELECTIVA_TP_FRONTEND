//modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NarbarComponent } from './componentes/narbar/narbar.component';
import { ListproductosComponent } from './componentes/listproductos/listproductos.component';
import { AddEditProductoComponent } from './componentes/add-edit-producto/add-edit-producto.component';
import { ProgresoBarComponent } from './shared/progreso-bar/progreso-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NarbarComponent,
    ListproductosComponent,
    AddEditProductoComponent,
    ProgresoBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
