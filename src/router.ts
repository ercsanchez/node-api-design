import { Router } from 'express';
import { body } from "express-validator";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from './handlers/product';
import { createUpdate, deleteUpdate, getAllUpdates, getOneUpdate, updateUpdate } from './handlers/update';
import { handleInputErrors } from './modules/middleware';

// not a constructor & just a regular function | capitalized coz of bad coding conventions
const router = Router();

router.get('/product', getAllProducts)

router.get('/product/:id', getOneProduct)
router.put(
  '/product/:id',
  body('name').isString(),
  handleInputErrors,
  updateProduct
) // req.body (a json) should have a field called name

router.post('/product',
  body('name').isString(),
  handleInputErrors,
  createProduct)

router.delete('/product', deleteProduct)

router.get('/update', getAllUpdates)
router.get('/update/:id', getOneUpdate)

router.put('/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional(),
  updateUpdate
  )

router.post('/update',
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('productId').exists().isString(),
  createUpdate
  )

router.delete('/update/:id', deleteUpdate)

router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})

router.put('/updatepoint/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),
  () => {})

router.post('/updatepoint',
  body('name').exists(),
  body('description').exists(),
  body('updateId').exists().isString(),
  () => {})

router.delete('/updatepoint/:id', () => {})

export default router;