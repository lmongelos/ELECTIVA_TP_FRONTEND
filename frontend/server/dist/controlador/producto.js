"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProductos = void 0;
const producto_1 = __importDefault(require("../modelo/producto"));
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducto = yield producto_1.default.findAll();
    res.json(listProducto);
});
exports.getProductos = getProductos;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_1.default.findByPk(id);
    if (producto) {
        res.json(producto);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_1.default.findByPk(id);
    if (!producto) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
    else {
        yield producto.destroy();
        res.json({
            msg: `el producto fue eliminado con éxito`
        });
    }
});
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield producto_1.default.create(body);
        res.json({
            msg: `El producto fue agregado con exito`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un error al tratar de insertar los datos`
        });
    }
});
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = yield producto_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: 'El producto fue actualziado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un error al intentar actualizar el producto`
        });
    }
});
exports.updateProduct = updateProduct;
