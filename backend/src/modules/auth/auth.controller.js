import authService from "./auth.service.js";
import { registerSchema, loginSchema,selectCompanySchema } from "./auth.validation.js";

class AuthController {

    // Register User
    async register(req, res, next) {
        try {

            // Validate Request Body
            const validatedData = registerSchema.parse(req.body);

            // Call Service
            const result = await authService.register(validatedData);

            return res.status(201).json(result);

        } catch (error) {
            next(error);
        }
    }

    // Login User
    async login(req, res, next) {
        try {

            const validatedData = loginSchema.parse(req.body);

            const result = await authService.login(validatedData);

            return res.status(200).json(result);

        } catch (error) {
            next(error);
        }
    }
    async refresh(req, res, next) {

    try {

        const { refreshToken } = req.body;

        const result = await authService.refreshToken(refreshToken);

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }

}
async logout(req, res, next) {

    try {

        const { refreshToken } = req.body;

        const result = await authService.logout(refreshToken);

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }

}
async logoutAll(req, res, next) {

    try {

        const userId = req.user.userId;

        const result = await authService.logoutAll(userId);

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }

}
async me(req, res, next) {

    try {

        const result = await authService.getCurrentUser(
            req.user.userId
        );

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }

}
async selectCompany(req, res, next) {

    try {

        const { companyId } =
            selectCompanySchema.parse(req.body);

        const result =
            await authService.selectCompany(
                req.user.userId,
                companyId
            );

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }

}
}

export default new AuthController();