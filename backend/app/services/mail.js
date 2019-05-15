'use strict';

const nodemailer = require('nodemailer'),
      utils = require('./utils');


const mail = module.exports = {};
let transporter = null;
nodemailer.createTestAccount((err, account) => {
  const SMTP_settings = {
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: account.user,
        pass: account.pass
    }
  };
  console.log(SMTP_settings);
  transporter = nodemailer.createTransport(SMTP_settings);
});

const smtp_host = process.env.SMTP_HOST,
  smtp_port = process.env.SMTP_PORT,
  smtp_user = process.env.SMTP_USER,
  smtp_pass = process.env.SMTP_PASS;

if (!smtp_host || !smtp_port || !smtp_user || !smtp_pass) {
  console.error('SMTP credentials are not defined!');
  // return process.exit();
}
// Currently test settings


mail.sendOnSignupCreate = async function (signupObj, signupId) {
  console.log(signupId);
  const signupHash = utils.encrypt(String(signupId));
  const link = 'https://www.muistinnollaus.fi/edit?id=' + signupHash;
  const options = {
    from: '"Teekkarius" <tpj@tpj.fi>',
    to: signupObj.email,
    subject: 'Subject',
    text: link
  };

  console.log('Sending mail to ' + signupObj.email);
  const info = await transporter.sendMail(options);
  console.log('mail sent');
  console.log(info);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return 1;
}
