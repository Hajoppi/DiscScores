'use strict';

const bcrypt= require('bcrypt'),
      jwt = require('jsonwebtoken'),
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

utils.createToken = (user) => {
  console.log(secret);
  return jwt.sign(
    { id: user.id, username: user.username, scope: 'normal'},
    secret,
    { algorithm: 'HS256'}
  );
}

utils.verifyToken = (token) => {
  const strippedToken = token.split(" ")[1];
  return jwt.verify(strippedToken, secret);
}