import { Router } from 'express';
import { body } from "express-validator";
import { handleInputErrors } from './modules/middleware';

// not a constructor & just a regular function | capitalized coz of bad coding conventions
const router = Router();

router.get('/product', (req, res) => {res.json({message: 'products'})})

router.get('/product/:id', () => {})
router.put(
  '/product/:id',
  body('name').isString(),
  handleInputErrors,
  (req, res) => {}
) // req.body (a json) should have a field called name

router.post('/product',
  body('name').isString(),
  handleInputErrors,
  () => {})

router.delete('/product', () => {})

router.get('/update', () => {})
router.get('/update/:id', () => {})

router.put('/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional(),
  () => {})

router.post('/update',
  body('title').exists().isString(),
  body('body').exists().isString(),
  () => {})

router.delete('/update/:id', () => {})

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