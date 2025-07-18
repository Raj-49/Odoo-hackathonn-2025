const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Authorization denied' });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ 
                message: 'Not authorized to access this resource' 
            });
        }

        next();
    };
};

module.exports = authorize;
