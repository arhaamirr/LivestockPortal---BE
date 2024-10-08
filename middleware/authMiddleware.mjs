import jwt from 'jsonwebtoken';
import User from '../models/userModel.mjs';

const auth = async (req, res, next) => {
    try {
        console.log(req.header('Authorization'),"req.header('Authorization')req.header('Authorization')")
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id });

        if (!user) {
            throw new Error();
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Please authenticate' });
    }
};

export default auth;
