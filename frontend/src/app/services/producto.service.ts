import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient ) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='api/productos/'
  }

  getListProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteProduct(id:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);      
  }

  guardarProducto (producto:Producto): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, producto)
  }

  getProduct(id:Number): Observable<Producto> {
    return this.http.get<Producto>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateProducto(id:Number, producto:Producto): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, producto);
  }
}
