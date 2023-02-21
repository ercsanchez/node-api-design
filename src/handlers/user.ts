import prisma from '../db'
import {comparePasswords, hashPassword, createJWT} from '../modules/auth';


export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password)
      // probably shouldn't await on an obj prop but we will handle errors later
      // so doesnt matter
    }
  })

  const token = createJWT(user);
  res.json({token})
}
