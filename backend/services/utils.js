'use strict';

const bcrypt= require('bcrypt'),
      secret = process.env.SECRET_KEY;

const utils = module.exports = {};

if(!secret) {
  console.error('SECRET_KEY is not defined!');
  return process.exit(1);
}

utils.hash = async (password) => {
  const saltRound = 10;
  return await bcrypt.hash(password, saltRound);
}

utils.decrypt = (text) => {
  const decipher = crypto.createDecipher(algorithm, secret);
  let decrypted = decipher.update(text,'hex', 'utf8');
  decrypted += decipher.final();
  return decrypted;
}
