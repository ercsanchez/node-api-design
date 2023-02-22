import prisma from '../db'

// Get all
export const getAllUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id
    },
    include: {
      updates: true  // joins user's products to query
    }
  });
  const updates = products.reduce(
    (allUpdates, product) => {
      return [...allUpdates, ...product.updates]
    },
    []
  )
  res.json({data: updates});
}

// Get one
export const getOneUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id
    },
  });
  res.json({data: update});
}
