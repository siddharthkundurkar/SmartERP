import { Router } from "express";
import authController from "./auth.controller.js";
import authenticate from "../../middlewares/auth.middleware.js";

const router = Router();

// Register
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);
router.post("/refresh", authController.refresh);
router.post("/logout", authController.logout);
router.post(
    "/logout-all",
    authenticate,
    authController.logoutAll
);
router.get(
    "/me",
    authenticate,
    authController.me
);
router.post(
    "/select-company",
    authenticate,
    authController.selectCompany
);
export default router;