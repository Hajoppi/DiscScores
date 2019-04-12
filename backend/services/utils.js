'use strict';

const crypto = require('crypto'),
      algorithm = 'aes256',
      secret = process.env.SECRET_KEY;

const utils = module.exports = {};

if(!secret) {
  console.error('SECRET_KEY is not defined!');
  return process.exit(1);
}

utils.encrypt = (text) => {
  const cipher = crypto.createCipher(algorithm, secret);
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

utils.decrypt = (text) => {
  const decipher = crypto.createDecipher(algorithm, secret);
  let decrypted = decipher.update(text,'hex', 'utf8');
  decrypted += decipher.final();
  return decrypted;
}
