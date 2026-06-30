import {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
    hashToken
} from "../utils//auth.util.js";

class TokenService {

    generateTokens(payload) {

        const accessToken = generateAccessToken(payload);

        const refreshToken = generateRefreshToken(payload);

        return {
            accessToken,
            refreshToken
        };

    }

    verifyAccess(token) {
        return verifyAccessToken(token);
    }

    verifyRefresh(token) {
        return verifyRefreshToken(token);
    }

    hash(token) {
        return hashToken(token);
    }

}

export default new TokenService();