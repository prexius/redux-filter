import dbConnect from '../../../dbConnect';
import Movie from '../../../models/movie';

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const page = parseInt(req.query.page) - 1 || 0;
                const limit = parseInt(req.query.limit) || 5;
                const search = req.query.search || "";
                let sort = req.query.sort || "rating";
                let category = req.query.category || "All";

                const categoryOptions = [
                    "Action",
                    "Romance",
                    "Fantasy",
                    "Drama",
                    "Crime",
                    "Adventure",
                    "Thriller",
                    "Sci-fi",
                    "Music",
                    "Family",
                ];

                category === "All"
                    ? (category = [...categoryOptions])
                    : (category = req.query.category.split(","));

                req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

                let sortBy = {};
                if (sort[1]) {
                    sortBy[sort[0]] = sort[1];
                } else {
                    sortBy[sort[0]] = "asc";
                }

                const movies = await Movie.find({ name: { $regex: search, $options: "i" } })
                    .where("category")
                    .in([...category])
                    .sort(sortBy)
                    .skip(page * limit)
                    .limit(limit);

                const total = await Movie.countDocuments({
                    category: { $in: [...category] },
                    name: { $regex: search, $options: "i" },
                });

                const response = {
                    error: false,
                    total,
                    page: page + 1,
                    limit,
                    categorys: categoryOptions,
                    movies,
                };

                res.status(200).json(response);
            } catch (err) {
                console.log(err);
                res.status(500).json({ error: true, message: "Internal Server Error" });
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
