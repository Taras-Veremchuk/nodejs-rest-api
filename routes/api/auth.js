const express = require("express");

const authenticate = require("../../middlewares/authenticate");

const ctrlUser = require("../../controllers/auth");

const validateBody = require("../../middlewares/validateBody");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post(
	"/users/register",
	validateBody(schemas.registerSchema),
	ctrlUser.register
);

// signin
router.post("/users/login", validateBody(schemas.loginSchema), ctrlUser.login);

router.get("/users/current", authenticate, ctrlUser.getCurrent);

router.post("/users/logout", authenticate, ctrlUser.logout);

router.patch("/users", authenticate, ctrlUser.updateSubscription);

module.exports = router;
