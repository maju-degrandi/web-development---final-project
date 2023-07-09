import express from 'express'
import authController from '../controllers/user-controller.js'
import adminMiddleware from '../middleware/authadmin-middleware.js'

const router = express.Router();

router.get('/users', authController.listUsers);
router.get('/logout', authController.logout);
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.put('/updateInfoUser', authController.updateUserInfo);
// router.put('/:id/admin', adminMiddleware.checkAdmin, authController.updateUserAdm);
router.put('/admin', authController.updateUserAdm);

export default router;