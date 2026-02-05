const jwt = require('jsonwebtoken');
const User = require('../Models/User');


const protect = async (req, res, next) => {
    try {

        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return next(err);
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);


        if (!user) {
            return err;
        }

        req.user = user;

    } catch (error) {

    }
}