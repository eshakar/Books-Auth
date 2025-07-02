import express from 'express';
import bookController from '../controller/bookController.js';
import authenticate from '../middleware/authMiddleware.js';
const router = express.Router();

router.use(authenticate);
router.get('/', bookController.getBooks);
router.get('/:_id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:_id', bookController.updateBook);
router.delete('/:_id', bookController.deleteBook);

export default router;