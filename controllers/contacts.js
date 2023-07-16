const { Contact } = require("../models/contact");

const { ctrlWrapper, HttpError } = require("../helpers");

const getAll = async (req, res, next) => {
	const result = await Contact.find();
	if (!result) {
		throw HttpError(404, "Request faild");
	}
	res.json(result);
};

const getById = async (req, res) => {
	const { id } = req.params;
	const result = await Contact.findById(id);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json(result);
};

const create = async (req, res, next) => {
	const result = await Contact.create(req.body);
	res.status(201).json(result);
};

const updateById = async (req, res) => {
	const { id } = req.params;
	const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json(result);
};

const updateFavorite = async (req, res, next) => {
	const { id } = req.params;
	const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json(result);
};

const deleteById = async (req, res, next) => {
	const { id } = req.params;
	const result = await Contact.findByIdAndRemove(id);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json({
		message: "Delete success",
	});
};

module.exports = {
	getAll: ctrlWrapper(getAll),
	getById: ctrlWrapper(getById),
	create: ctrlWrapper(create),
	updateById: ctrlWrapper(updateById),
	updateFavorite: ctrlWrapper(updateFavorite),
	deleteById: ctrlWrapper(deleteById),
};
