import express from 'express';
import appConstants from '../app.constants';
import userRoutes from './user.route';

const router = express.Router(); // eslint-disable-line new-cap

router.use(appConstants.userController.routeName, userRoutes);

export default router;
