import { Router} from 'express';
import { deleteProduct, getProduct, getProductos, postProduct, updateProduct } from '../controlador/producto';

const router = Router();

router.get('/',getProductos);
router.get('/:id',getProduct);
router.delete('/:id',deleteProduct);
router.post('/',postProduct);
router.put('/:id',updateProduct);

export default router;