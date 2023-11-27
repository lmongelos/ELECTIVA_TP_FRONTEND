import {Request, Response} from 'express';
import Producto from '../modelo/producto';

export const getProductos = async (req:Request, res:Response)=> {
    const listProducto = await Producto.findAll()

    res.json (listProducto)
}

export const getProduct = async (req:Request, res:Response)=> {

    const { id }=req.params;
    const producto= await Producto.findByPk(id);

    if (producto){
       res.json(producto)
    } else{
        res.status(404).json({
           msg: `No existe un producto con el id ${id}`
        })
    }

}

export const deleteProduct = async (req:Request, res:Response)=> {

    const { id }=req.params;
    const producto= await Producto.findByPk(id);

    if (!producto) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }else {
        await producto.destroy();
        res.json({
            msg: `el producto fue eliminado con éxito`
        })
    }

}

export const postProduct = async (req:Request, res:Response)=> {
    const { body } = req;
    
    try {
        await Producto.create(body);

        res.json({
            msg: `El producto fue agregado con exito`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un error al tratar de insertar los datos`
        })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const product = await Producto.findByPk(id);

    if(product) {
        await product.update(body);
        res.json({
            msg: 'El producto fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un error al intentar actualizar el producto`
        })
    }

    
}