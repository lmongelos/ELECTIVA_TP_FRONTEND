import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-add-edit-producto',
  templateUrl: './add-edit-producto.component.html',
  styleUrls: ['./add-edit-producto.component.css']
})
export class AddEditProductoComponent  {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor (private fb:FormBuilder, 
    private _productService: ProductoService, 
    private router: Router, 
    private toastr: ToastrService, 
    private aRouter: ActivatedRoute
    ) {
    this.form=this.fb.group({
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      precio:[null, Validators.required],
      stock:[null, Validators.required]
    })

    //aRouter.snapshot.paramMap.get('id');
    this.id=Number(aRouter.snapshot.paramMap.get('id'));
    //console.log(aRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit ():void{
    if (this.id !== 0){
      //es editar
      this.operacion= 'Editar ';
      this.getProduct(this.id);
    }
  }

  getProduct (id:Number){
    this.loading=true;
    this._productService.getProduct(id).subscribe((data:Producto)=> {
      console.log(data);
      this.loading=false;
      this.form.setValue({
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio, 
        stock: data.stock
      })
    })
  }

  addProducto() {
    const producto: Producto = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      precio:this.form.value.precio,
      stock: this.form.value.stock
    }

    if (this.id !== 0 ){
      //Editar
      this.loading = true;
      producto.id=this.id;
      this._productService.updateProducto(this.id, producto).subscribe(()=>{
      this.loading=false;
      this.toastr.success(`El producto ${producto.nombre} fue modificado con éxito`, 'Producto actualizado')
      this.router.navigate(['/'])  
      })
      
    }else{
      //Agregar
      this.loading=true;
      this._productService.guardarProducto(producto).subscribe(()=> {
      this.loading=false;
      this.toastr.success(`El producto ${producto.nombre} fue agregado con éxito`, 'Producto registrado')
      this.router.navigate(['/'])
      //console.log('Producto agregado');
    })
    }

    //console.log(producto);
    
  }
}
