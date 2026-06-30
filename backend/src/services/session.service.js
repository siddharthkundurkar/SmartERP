import authRepository from "../modules/auth/auth.repositories.js";
import tokenService from "./token.service.js";

class SessionService {

    async createSession(userId, refreshToken) {

        const hashedToken = tokenService.hash(refreshToken);

        return authRepository.createSession({
            userId,
            refreshTokenHash: hashedToken,
            expiresAt: new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000
            )
        });

    }

    async deleteSession(refreshToken) {

        const hash = tokenService.hash(refreshToken);

        const session =
            await authRepository.findSessionByToken(hash);

        if (!session) {
            return;
        }

        await authRepository.deleteSession(session.id);

    }
async findSession(refreshToken) {

    const hash = tokenService.hash(refreshToken);

    return authRepository.findSessionByToken(hash);

}

async deleteAllSessions(userId) {

    return authRepository.deleteAllSessions(userId);

}
}

export default new SessionService();