import dbConnect from '../../../dbConnect'
import Types from '../../../models/types'

export default async function handler(req, res) {
    await dbConnect()
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const types = await Types.find(req.query) /* find all the data in our database */
                res.status(200).json(types)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const type = await Types.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json(type)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}

