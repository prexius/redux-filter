import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        author: {
            type: String,
        },
        avatar: {
            type: String,
        },
        date: {
            type: String,
        },
        duration: {
            type: String,
        },
        views: {
            type: String,
        },
        link: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
        tags: {
            type: [
                {
                    type: String,

                },
            ],
        },
        likes: {
            type: Number,
        },
        unlikes: {
            type: Number,
        }
    },
    { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);