import jwt from 'jsonwebtoken';

export const createJWT = (user) => {
  const token = jwt.sign(
    {id: user.id, username: user.username},
    process.env.JWT_SECRET
  )
  return token;
}

export const protectRoute = (req, res, next) => {
  const bearer = req.headers.authorization;

  // check if authorization header has a token
  if (!bearer) {
    res.status(401);
    res.json({message: 'not authorized'})
    return;
  }
}
