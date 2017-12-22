import BaseJoi from 'joi';
import Extension from 'joi-date-extensions';
import validateHelper from './validate.helper';
import appConstants from '../app.constants';

const Joi = BaseJoi.extend(Extension);

const getUserSchema = {
  userId: Joi.number().required(),
};

/**
 * Validates get user request
 * @param {object} request - service request
 * @param {method} callback - call back method
 */
const validateGetUser = (request, callback) => {
  try {
    validateHelper.validateRequest(request, getUserSchema, (err, data) => {
      callback(err, data);
    });
  } catch (err) {
    callback({
      message: err.message,
      stackTrace: err.stack,
      eventType: appConstants.eventType.applicationError,
      messageType: appConstants.messageType.error,
      ownerType: appConstants.ownerTypes.validators.userValidator,
      source: `${appConstants.ownerTypes.validators.userValidator}.validateGetUser`,
    }, null);
  }
};

const insertUserSchema = {
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email(),
};

/**
 * Validates user input
 * @param {object} request - service request
 * @param {method} callback - call back method
 */
const validateInsertUser = (request, callback) => {
  try {
    validateHelper.validateRequest(request, insertUserSchema, (err, data) => {
      callback(err, data);
    });
  } catch (err) {
    callback({
      message: err.message,
      stackTrace: err.stack,
      eventType: appConstants.eventType.applicationError,
      messageType: appConstants.messageType.error,
      ownerType: appConstants.ownerTypes.validators.userValidator,
      source: `${appConstants.ownerTypes.validators.userValidator}.validateInsertUser`,
    }, null);
  }
};

export default {
  validateGetUser,
  validateInsertUser,
};
