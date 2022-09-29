import dbConnect from '../../../dbConnect'
import Tag from '../../../models/tag'

export default async function handler(req, res) {
    await dbConnect()
    const { method } = req
    // const { title, address } = req.query;
    // const filter = {}
    // if (title) {
    //     filter.title = title
    // }
    // if (address) {
    //     filter.address = address
    // }

    switch (method) {
        case 'GET':
            try {
                const tags = await Tag.find(req.query) /* find all the data in our database */
                res.status(200).json(tags)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const tag = await Tag.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json(tag)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}

