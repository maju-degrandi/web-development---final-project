import express from 'express'
import authController from '../controllers/user-controller.js'
import adminMiddleware from '../middleware/authadmin-middleware.js'

const router = express.Router();

router.get('/logout', authController.logout);
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.put('/:id/admin', adminMiddleware.checkAdmin, authController.updateUserAdm);

export default router;