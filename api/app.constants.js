//  base service route
const apiServiceRoute = '/seedapiservices';

const userController = {
  ownerType: 'api.controllers.user.controller',
  routeName: '/user',
  routeMethods: {
    getUserRoute: '/getUser',
    insertUserRoute: '/insertUser',
  },
};

const validationStatus = {
  success: 'Success',
  failed: 'Failed',
};

const messageType = {
  error: 'Error',
  information: 'Information',
  alert: 'Alert',
  authenticationAlert: 'AuthenticationAlert',
  heartBeat: 'HeartBeat',
  applicationEvent: 'ApplicationEvent',
  clientAccessReset: 'ClientAccessReset',
};

const eventType = {
  applicationError: 'ApplicationError',
  applicationInformation: 'ApplicationInformation',
  applicationLogin: 'ApplicationLogin',
};

const applicationMessages = {
  internalServerError: 'Internal Server Error occurred. Please contact RxNT support',
  accessForbidden: 'Access is forbidden',
  resourceNotFound: 'Resource not found',
  methodNotSupported: 'Method not supported',
  dbConnectivityFailed: 'Unable to connect to database',
};

const ownerTypes = {
  validators: {
    validatorHelper: 'api.validators.validate.helper',
    userValidator: 'api.validators.user.validators',
  },
};

module.exports = {
  apiServiceRoute,
  userController,
  validationStatus,
  messageType,
  eventType,
  applicationMessages,
  ownerTypes,
};
