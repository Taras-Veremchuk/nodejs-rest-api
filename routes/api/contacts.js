const express = require("express");

const router = express.Router();

const ctrlContact = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", ctrlContact.getAllContacts);

router.get("/:id", isValidId, ctrlContact.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrlContact.addContact);

router.put(
	"/:id",
	isValidId,
	validateBody(schemas.addSchema),
	ctrlContact.updateContactById
);

router.patch(
	"/:id/favorite",
	isValidId,
	validateBody(schemas.updateFavoriteSchema),
	ctrlContact.updateFavorite
);

router.delete("/:id", isValidId, ctrlContact.deleteContactById);

module.exports = router;
