import express from 'express';
import { upload } from '../configs/multer.js';
import authSeller from '../middleware/authSeller.js';
import { addProduct, changeStock, deleteProduct, productById, productList } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/add', upload.array(["images"]), authSeller, addProduct);
productRouter.get('/list', productList);
productRouter.get('/id/:id', productById); // ✅ fixed line
productRouter.patch('/stock', authSeller, changeStock);
productRouter.delete('/delete/:id', authSeller, deleteProduct);
export default productRouter;
