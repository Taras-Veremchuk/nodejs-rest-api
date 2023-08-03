const nodemailer = require("nodemailer");

require("dotenv").config();

const { PASSWORD } = process.env;

const config = {
	host: "smtp.meta.ua",
	port: 465,
	secure: true,
	auth: {
		user: "segment15@meta.ua",
		pass: PASSWORD,
	},
};

const transporter = nodemailer.createTransport(config);

const emailOptions = {
	from: "segment15@meta.ua",
	to: "taras.veremm@gmail.com",
	subject: "Nodemailer test",
	text: "Test.... U did it!",
};

transporter
	.sendMail(emailOptions)
	.then((info) => console.log(info))
	.catch((err) => console.log(err));

module.exports = transporter;
