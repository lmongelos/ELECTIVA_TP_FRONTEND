import { DataTypes } from 'sequelize';
import db from '../db/conexion';

const Producto = db.define('Producto', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
});
//console.log(Producto);
export default Producto;