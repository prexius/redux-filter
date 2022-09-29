import dbConnect from '../../../dbConnect'
import Product from '../../../models/product'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()
  // const { tags, address } = req.query;
  //   const filter = {}
  //   if (tags) {
  //       filter.tags = tags
  //   }
    // if (address) {
    //     filter.address = address
    // }

  switch (method) {
    case 'GET':
      try {
        const products = await Product.find(req.query) /* find all the data in our database */
        res.status(200).json(products)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const product = await Product.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json(product)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
