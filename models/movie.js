import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: 'This field is required'
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: Array,
            require: true
        },
        test: {
            type: Array,
            require: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);
MovieSchema.index({ "$**" : 'text' });
export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);