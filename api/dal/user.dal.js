import sql from 'mssql';
import config from '../../config';
/**
 * Get user information
 * @param {object} req - service request
 */
const getUser = (req) => {
  const getPromise = new Promise((resolve, reject) => {
    new sql.ConnectionPool(config.sqlConnectionString).connect().then((pool) => {
      pool.request()
        .input('UserId', sql.Int, req.body.userId)
        .execute('[GetUser]', (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
    }, (err) => {
      reject(err);
    });
  });

  return getPromise;
};

/**
 * Insert user
 * @param {object} req - service request
 */
const insertUser = (req) => {
  const getPromise = new Promise((resolve, reject) => {
    new sql.ConnectionPool(config.sqlConnectionString).connect().then((pool) => {
      pool.request()
        .input('Name', sql.VarChar(100), req.body.name)
        .input('Email', sql.VarChar(100), req.body.email)
        .input('Password', sql.VarChar(100), req.body.password)
        .execute('[InsertUser]', (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
    }, (err) => {
      reject(err);
    });
  });

  return getPromise;
};

export default {
  getUser,
  insertUser,
};
