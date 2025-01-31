"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validators_middleware_1 = require("../middlewares/validators.middleware");
const router = (0, express_1.Router)();
exports.authRouter = router;
router.post("/register", validators_middleware_1.validatorRegister, async (req, res) => {
    try {
        const { repassword, ...data } = req.body;
        const createRegister = await (0, auth_controller_1.register)(data);
        if (!createRegister)
            throw new Error("Could not register");
        res.status(201).json(createRegister);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.post("/refreshToken", async (req, res) => {
    try {
        const newAccessToken = await (0, auth_controller_1.refreshToken)(req, res);
        res.status(200).json({
            message: "Refresh Token created successfully",
            accessToken: newAccessToken,
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.post("/login", validators_middleware_1.validatorLogin, async (req, res) => {
    try {
        const data = req.body;
        const clientLogin = await (0, auth_controller_1.login)(data, res);
        const token = clientLogin?.token;
        res.status(200).json({ message: "Client login succesfully", token });
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
});
