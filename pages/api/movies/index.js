import dbConnect from '../../../dbConnect';
import Movie from '../../../models/movie';

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            let { limit = 10, page = 1, category, test, q } = req.query;

            const limitRecords = parseInt(limit);
            const skip = (page - 1) * limit;

            let query = {};
            if (q) {
                query = { $text: { $search: q } };
            }
            if (category) query.category = category;
            if (test) query.test = test;

            // genre === "All" ? (genre = [...genreOptions]) : (genre = req.query.genre.split(","));



            try {
                const movies = await Movie.find(query).limit(limitRecords).skip(skip);
                res.json({ page: page, limit: limitRecords, movies });
            } catch (err) {
                res.status(400).json({ message: err })
            }
            break
        case 'POST':
            try {
                const movie = await Movie.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json({ success: true, data: movie })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
