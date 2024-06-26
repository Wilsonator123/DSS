const express = require("express");
const router = express.Router();
const account = require("../accounts/account.js");
const { cookie, body, validationResult } = require("express-validator");
const { setCookie, validateCookie } = require("../utils/cookie.js");
const { authorize } = require("../middleware.js");
router.get("/", (req, res) => {
	res.send({ data: "Account route" });
});

router.post(
	"/getUser",
	authorize(["account:read"]),
	body("username").isString().optional(),
	cookie("id").custom((value, { req }) => {
		const cookie = req.cookies.id;
		if (!cookie) {
			throw new Error("Cookie 'id' not found");
		}
		return true;
	}),
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array().map((error) => {
						return error.msg;
					}),
				});
			}
			let result = undefined;

			if (req.body?.username) {
				result = await account.getUserByUsername(req.body.username);
			} else {
				if (await validateCookie(req, res)) {
					result = await account.getUser(req.cookies.id);
				} else {
					return res.status(401).json({ errors: "Unauthorized" });
				}
			}

			if (result) {
				res.status(200).json({ data: result });
			} else {
				res.status(401).json({ errors: "User not found" });
			}
		} catch (error) {
			console.log(error);
			res.status(500).json({ errors: "Internal Server Error" });
		}
	}
);

module.exports = router;
