import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listproductos',
  templateUrl: './listproductos.component.html',
  styleUrls: ['./listproductos.component.css']
})
export class ListproductosComponent{
  listproductos : Producto[]=[]
  loading: boolean=false;
  dataSource:any; 

  constructor(private _productService:ProductoService,private toastr: ToastrService) { }
  
  ngOnInit (): void {
    //comentar si no funciona
    this.dataSource = new MatTableDataSource(this.listproductos);
    this.getListProduct();
  }

  getListProduct () {
    this.loading=true;
    this._productService.getListProducts().subscribe((data: Producto[]) => {
      //caches;this.getListProduct
      //console.log(data);
      this.listproductos=data;
      this.loading=false;
    })
  }

  deleteProduct(id:number){
    //console.log(id);
    this.loading=true;
    this._productService.deleteProduct(id).subscribe(()=> {
    this.getListProduct();
    this.toastr.warning('El producto fue elimimado con éxito', 'Producto Eliminado')
    
    })
  }
  

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
}
