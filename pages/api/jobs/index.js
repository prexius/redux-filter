import dbConnect from '@dbConnect';
import Product from '@models/product';

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            let {
                limit = 5,
                page = 1,
                skills,
                tags,
                country,
                position,
                industry,
                salary,
                experience,
                onsiteRemote,
                jobType,
                q
            } = req.query;
            const limitRecords = parseInt(limit);
            const skip = (page - 1) * limit;

            let query = {};
            if (q) {
                query = { $text: { $search: q } };
            }

            skills ? skills = skills.split(",") : null;
            if (skills) query.skills = { $in: skills };

            tags ? tags = tags.split(",") : null;
            if (tags) query.tags = { $in: tags };

            if (country) query.country = country;
            if (position) query.position = position;
            if (industry) query.industry = industry;
            if (salary) query.salary = salary;
            if (experience) query.experience = experience;
            if (onsiteRemote) query.onsiteRemote = onsiteRemote;
            if (jobType) query.jobType = jobType;



            try {
                const products = await Product.find(query).limit(limitRecords).skip(skip);
                res.json({ page: page, limit: limitRecords, products });
            } catch (err) {
                res.status(400).json({ message: err })
            }
            break
        case 'POST':
            try {
                const movie = await Product.create(
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
