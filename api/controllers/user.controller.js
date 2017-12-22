import httpMessages from '../helpers/http-messages';
import userDal from '../dal/user.dal';
import userValidator from '../validators/user.validators';
import helper from '../helpers/common.helper';
import appConstants from '../app.constants';

/**
 * Get user information
 * @param {object} req - service request
 * @param {object} res - service response
 * @param {method} next - middleware method
 */
const getUser = (req, res) => {
  userValidator.validateGetUser(req.body, (err, validationMsg) => {
    if (err) {
      httpMessages.sendJson(req, res, helper.prepareErrorObject(err, req));
    } else if (validationMsg !== null && validationMsg !== undefined && validationMsg.length > 0) {
      httpMessages.sendJson(req, res, {
        ValidationStatus: appConstants.validationStatus.failed,
        ValidationMessages: validationMsg,
      });
    } else {
      userDal.getUser(req).then((results) => {
        let userInfo = null;
        const USER_INFO_DATATABLE_INDEX = 0;
        if (results.recordsets[0].length > 0) {
          userInfo = results.recordsets[USER_INFO_DATATABLE_INDEX][0];
        }
        const data = {
          ValidationStatus: appConstants.validationStatus.success,
          User: userInfo,
        };
        httpMessages.sendJson(req, res, data);
      }, (errInfo) => {
        httpMessages.sendJson(req, res, helper.prepareErrorObject({
          primaryKey: req.body.userId,
          message: errInfo.message,
          stackTrace: errInfo.stack,
          eventType: appConstants.eventType.applicationError,
          messageType: appConstants.messageType.error,
          ownerType: appConstants.userController.ownerType,
          source: `${appConstants.userController.ownerType}.getUser`,
        }, req));
      });
    }
  });
};

/**
 * Insert user
 * @param {object} req - service request
 * @param {object} res - service response
 * @param {method} next - middleware method
 */
const insertUser = (req, res) => {
  userValidator.validateGetUser(req.body, (err, validationMsg) => {
    if (err) {
      httpMessages.sendJson(req, res, helper.prepareErrorObject(err, req));
    } else if (validationMsg !== null && validationMsg !== undefined && validationMsg.length > 0) {
      httpMessages.sendJson(req, res, {
        ValidationStatus: appConstants.validationStatus.failed,
        ValidationMessages: validationMsg,
      });
    } else {
      userDal.insertUser(req).then((results) => {
        const data = {
          ValidationStatus: appConstants.validationStatus.success,
        };
        httpMessages.sendJson(req, res, data);
      }, (errInfo) => {
        httpMessages.sendJson(req, res, helper.prepareErrorObject({
          message: errInfo.message,
          stackTrace: errInfo.stack,
          eventType: appConstants.eventType.applicationError,
          messageType: appConstants.messageType.error,
          ownerType: appConstants.userController.ownerType,
          source: `${appConstants.userController.ownerType}.insertUser`,
        }, req));
      });
    }
  });
};

export default {
  getUser,
  insertUser,
};
