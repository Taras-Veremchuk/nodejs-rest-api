const { Contact } = require("../../models");
const { ctrlWrapper, HttpError } = require("../../helpers");

const getAll = async (req, res, next) => {
	const { _id: owner } = req.user;
	const { page = 1, limit = 20, favorite } = req.query;
	const skip = (page - 1) * limit;
	const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
		skip,
		limit,
	}).populate("owner", "name email");
	if (!result) {
		throw HttpError(404, "Request faild");
	}
	res.json(result);
};

module.exports = ctrlWrapper(getAll);
