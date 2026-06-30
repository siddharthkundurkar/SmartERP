const authorize = (...permissions) => {

    return (req, res, next) => {

        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }

        const userPermissions = req.user.permissions || [];

        const hasPermission = permissions.some(permission =>
            userPermissions.includes(permission)
        );

        if (!hasPermission) {
            return res.status(403).json({
                success: false,
                message: "You don't have permission to perform this action"
            });
        }

        next();

    };

};

export default authorize;