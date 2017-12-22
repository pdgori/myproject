import express from 'express';
import userCtrl from '../controllers/user.controller';
import appConstants from '../app.constants';

const router = express.Router(); // eslint-disable-line new-cap

router.route(appConstants.userController.routeMethods.getUserRoute)
  .post(userCtrl.getUser);

router.route(appConstants.userController.routeMethods.insertUserRoute)
  .post(userCtrl.insertUser);

export default router;
