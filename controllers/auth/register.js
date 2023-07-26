const { User } = require("../../models/user");
const { ctrlWrapper, HttpError } = require("../../helpers");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user) {
		throw HttpError(409, "Email in use");
	}

	const hashPassword = await bcrypt.hash(password, 10);
	// user password coincides with ours password(return true or false)
	// const compareResult = await bcrypt.compare(password, hashPassword);

	const newUser = await User.create({ ...req.body, password: hashPassword });

	res.status(201).json({
		user: {
			email: newUser.email,
			subscription: "starter",
		},
	});
};

module.exports = ctrlWrapper(register);
