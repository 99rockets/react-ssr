import {Router} from 'express';
import {controller} from '../controllers/main';

export const router = Router()
	.get('/', controller);
