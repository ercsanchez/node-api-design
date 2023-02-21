// helper to generate prisma client once so that we can just use it
// wherever we want and not have to code this all the time
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;