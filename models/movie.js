import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        img: { type: String, required: true },
        year: { type: Number, required: true },
        genre: { type: [String], required: true },
        rating: { type: Number, required: true }
    },
    { timestamps: true }
);

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);