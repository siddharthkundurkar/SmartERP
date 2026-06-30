import jwt from "jsonwebtoken";
import crypto from "crypto";

// ======================
// JWT Tokens
// ======================

export const generateAccessToken = (payload) => {
    return jwt.sign(
        payload,
        process.env.JWT_ACCESS_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES || "15m",
        }
    );
};

export const generateRefreshToken = (payload) => {
    return jwt.sign(
        payload,
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRES || "7d",
        }
    );
};

export const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
};

export const verifyRefreshToken = (token) => {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

// ======================
// Refresh Token Hashing
// ======================

export const hashToken = (token) => {
    return crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");
};