import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const comparePasswords =
  (password, hashedPassword) =>
    bcrypt.compare(password, hashedPassword);  // returns promise (true/false)


export const hashPassword =
  (password) =>
    bcrypt.hash(password, 5); // 5 is the salt

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

  // check if there is a token value after "Bearer" prefix
  // const [, token] = bearer.split(' ');

  // check if token was prefixed with "Bearer"
  const [prefix, token] = bearer.split(' ');

  if (!token || !(prefix === "Bearer")) {
    res.status(401);
    res.json({message: 'not valid token'});
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET); // checks if token is valid based on JWT_SECRET

    // currently doesn't verify user if the same one based on a valid token
    req.user = user;
    next();
    return;
  } catch (e) {
    res.status(401);
    res.json({message: "not valid token"})
    console.error(e);
  }
}
