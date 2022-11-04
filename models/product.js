import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        jobTitle: {
            type: String,
        },
        slug: {
            type: String,
        },
        companyLogo: {
            type: String,
        },
        companyTitle: {
            type: String,
        },
        companyLocation: {
            type: String,
        },
        companyEstablish: {
            type: String,
        },
        companySize: {
            type: [
                {
                    min: {
                        type: Number,

                    },
                    max: {
                        type: Number,

                    },
                },
            ],
        },
        companyEmail: {
            type: String,
        },
        companyUrl: {
            type: String,
        },
        desc: {
            type: String,
        },
        country: {
            type: String,
        },
        industry: {
            type: String,
        },
        salary: {
            type: [
                {
                    min: {
                        type: Number,

                    },
                    max: {
                        type: Number,

                    },
                },
            ],
        },
        jobType: {
            type: String,
        },
        jobPosted: {
            type: String,
        },
        hourlyRate: {
            type: Number,
        },
        jobLevel: {
            type: String,
        },
        experience: {
            type: String,
        },
        deadline: {
            type: String,
        },
        position: {
            type: String,
        },
        onsiteRemote: {
            type: String,
        },
        tags: {
            type: [
                {
                    type: String,

                },
            ],
        },
        skills: {
            type: [
                {
                    type: String,

                },
            ],
        },
        featured: {
            type: Boolean,
        },
        trending: {
            type: Boolean,
        }
    },
    { timestamps: true }
);
ProductSchema.index({ "$**": 'text' });
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);