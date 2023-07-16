const express = require("express");

const router = express.Router();

const ctrlContact = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", ctrlContact.getAll);

router.get("/:id", isValidId, ctrlContact.getById);

router.post("/", validateBody(schemas.addSchema), ctrlContact.create);

router.put(
	"/:id",
	isValidId,
	validateBody(schemas.addSchema),
	ctrlContact.updateById
);

router.patch(
	"/:id/favorite",
	isValidId,
	validateBody(schemas.updateFavoriteSchema),
	ctrlContact.updateFavorite
);

router.delete("/:id", isValidId, ctrlContact.deleteById);

module.exports = router;
