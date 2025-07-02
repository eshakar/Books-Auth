import jwt from 'jsonwebtoken';
import User from '../schema/userModel.js'; 

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (!req.user) throw new Error();
    next();
  } catch {
    res.sendStatus(403);
  }
};

export default authenticate;
