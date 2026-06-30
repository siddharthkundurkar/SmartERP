import prisma from "../../config/db.js";

class AuthRepository {

    async findUserByEmail(email) {
        return prisma.user.findUnique({
            where: { email }
        });
    }

    async findUserByMobile(mobile) {
        return prisma.user.findUnique({
            where: { mobile }
        });
    }

    async createUser(tx, data) {
        return tx.user.create({
            data
        });
    }

    async createCompany(tx, data) {
        return tx.company.create({
            data
        });
    }

    async createRole(tx, data) {
        return tx.role.create({
            data
        });
    }

    async assignCompanyUser(tx, data) {
        return tx.companyUser.create({
            data
        });
    }

    async createPermission(tx, data) {
        return tx.permission.create({
            data
        });
    }

    async assignPermission(tx, data) {
        return tx.rolePermission.create({
            data
        });
    }
    async findSessionByToken(refreshTokenHash) {
    return prisma.userSession.findFirst({
        where: {
            refreshTokenHash,
            status: "ACTIVE"
        }
    });
}

async updateSession(id, data) {
    return prisma.userSession.update({
        where: { id },
        data
    });
}

async deleteSession(id) {
    return prisma.userSession.delete({
        where: { id }
    });
}

async deleteAllSessions(userId) {
    return prisma.userSession.deleteMany({
        where: { userId }
    });
}
async findUserById(userId) {
    return prisma.user.findUnique({
        where: {
            id: userId
        },
        include: {
            companyUsers: {
                include: {
                    company: true,
                    role: {
                        include: {
                            permissions: {
                                include: {
                                    permission: true
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}
async updateLastLogin(userId) {
    return prisma.user.update({
        where: {
            id: userId
        },
        data: {
            lastLogin: new Date()
        }
    });
}
async createSession(data) {
    return prisma.userSession.create({
        data
    });
}
async findCompanyUser(userId, companyId) {
    return prisma.companyUser.findFirst({
        where: {
            userId,
            companyId,
            isActive: true
        },
        include: {
            company: true,
            role: {
                include: {
                    permissions: {
                        include: {
                            permission: true
                        }
                    }
                }
            }
        }
    });
}
}

export default new AuthRepository();