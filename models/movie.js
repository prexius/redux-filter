import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
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
MovieSchema.index({ "$**": 'text' });
export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);