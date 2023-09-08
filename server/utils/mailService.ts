const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const handlebarOptions = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: path.resolve(__dirname, 'templates'),
    defaultLayout: false,
  },
  viewPath: path.resolve(__dirname, 'templates'),
  extName: '.hbs',
};

transporter.use('compile', hbs(handlebarOptions));

const sendEmail = async (email: string) => {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Welcome to NodeMailer',
    template: 'welcome',
  };
  return await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
