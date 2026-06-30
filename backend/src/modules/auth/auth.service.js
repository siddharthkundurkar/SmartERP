import bcrypt from "bcrypt";
import prisma from "../../config/db.js"
import authRepository from "./auth.repositories.js";

import passwordService from "../../services/password.service.js";
import tokenService from "../../services/token.service.js";
import sessionService from "../../services/session.service.js";
class AuthService {

   async register(userData) {

    const {
        fullName,
        email,
        mobile,
        password,
        companyName
    } = userData;

    // Check existing user
    const existingEmail = await authRepository.findUserByEmail(email);

    if (existingEmail) {
        throw new Error("Email already registered");
    }

    if (mobile) {
        const existingMobile = await authRepository.findUserByMobile(mobile);

        if (existingMobile) {
            throw new Error("Mobile number already registered");
        }
    }

    // Hash Password
    const passwordHash =
    await passwordService.hash(password);

    // Transaction
    return await prisma.$transaction(async (tx) => {

        // Create User
        const user = await authRepository.createUser(tx, {
            fullName,
            email,
            mobile,
            passwordHash
        });

        // Create Company
        const company = await authRepository.createCompany(tx, {
            name: companyName
        });

        // Create Owner Role
        const ownerRole = await authRepository.createRole(tx, {
            companyId: company.id,
            name: "Owner",
            description: "Company Owner",
            isSystem: true
        });

        // Assign User to Company
        await authRepository.assignCompanyUser(tx, {
            companyId: company.id,
            userId: user.id,
            roleId: ownerRole.id
        });

        return {
            success: true,
            message: "Registration successful",
            data: {
                user: {
                    id: user.id,
                    fullName: user.fullName,
                    email: user.email
                },
                company: {
                    id: company.id,
                    name: company.name
                }
            }
        };

    });

}
async login(loginData) {

    const { email, password } = loginData;
console.log(Object.keys(authRepository));
console.log(authRepository);
    // Find User
    const user = await authRepository.findUserByEmail(email);

    if (!user) {
        throw new Error("Invalid email or password");
    }

    if (!user.isActive) {
        throw new Error("Account is disabled");
    }

    // Verify Password
    const isPasswordValid =
    await passwordService.compare(
        password,
        user.passwordHash
    );

    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }

    // JWT Payload
    const payload = {
    userId: user.id,
    email: user.email,
    fullName: user.fullName
};
    // Generate Tokens
    const {
    accessToken,
    refreshToken
} = tokenService.generateTokens(payload);
    // Update Last Login
    await authRepository.updateLastLogin(user.id);

    // Create Session
    await sessionService.createSession(
    user.id,
    refreshToken
);
    return {
        success: true,
        message: "Login successful",
        data: {
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email
            },
            accessToken,
            refreshToken
        }
    };
}
async refreshToken(refreshToken) {

    if (!refreshToken) {
        throw new Error("Refresh token is required");
    }

    // Verify JWT
    const decoded = tokenService.verifyRefresh(refreshToken);

    // Find Session
    const session = await sessionService.findSession(refreshToken);

    if (!session) {
        throw new Error("Session not found");
    }

    // Generate New Access Token
    const payload = {
        userId: decoded.userId,
        email: decoded.email,
        fullName: decoded.fullName
    };

    const { accessToken } = tokenService.generateTokens(payload);

    return {
        success: true,
        message: "Access token refreshed",
        data: {
            accessToken
        }
    };

}
async logout(refreshToken) {

    if (!refreshToken) {
        throw new Error("Refresh token is required");
    }

    await sessionService.deleteSession(refreshToken);

    return {
        success: true,
        message: "Logout successful"
    };

}
async logoutAll(userId) {

    await sessionService.deleteAllSessions(userId);

    return {
        success: true,
        message: "Logged out from all devices"
    };

}
async getCurrentUser(userId) {

    const user = await authRepository.findUserById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    return {
        success: true,
        message: "User fetched successfully",
        data: user
    };
}
async selectCompany(userId, companyId) {

    const companyUser = await authRepository.findCompanyUser(
        userId,
        companyId
    );

    if (!companyUser) {
        throw new Error("You are not assigned to this company");
    }

    const permissions = companyUser.role.permissions.map(
        (item) => item.permission.code
    );

    const payload = {
        userId,
        companyId: companyUser.company.id,
        roleId: companyUser.role.id,
        roleName: companyUser.role.name,
        permissions
    };

    const { accessToken, refreshToken } =
        tokenService.generateTokens(payload);

    await sessionService.createSession(
        userId,
        refreshToken
    );

    return {
        success: true,
        message: "Company selected successfully",
        data: {
            company: companyUser.company,
            role: companyUser.role.name,
            permissions,
            accessToken,
            refreshToken
        }
    };
}
}

export default new AuthService();