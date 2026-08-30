import express from 'express'
import { signupUser } from '../controller/authController';

const router = express.Router();

router.post('/signup', signupUser);

export default router;