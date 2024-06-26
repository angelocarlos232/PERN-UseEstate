import express from 'express';
import { signup, signin, update } from '../controllers/userController.js';

const router = express.Router(); 

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/updateusername', update)

export default router;