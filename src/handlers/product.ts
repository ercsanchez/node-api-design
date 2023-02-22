import prisma from '../db'

// Get all
export const getAllProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    include: {
      products: true  // joins user's products to query
    }
  });
  res.json({data: user.products});
}

// Get one
export const getOneProduct = async (req, res) => {
  const product = await prisma.product.findFirst({
    where: {
      id: req.params.id,
      belongsToId: req.user.id
    },
  });
  res.json({data: product});
}
