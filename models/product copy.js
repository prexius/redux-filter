import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        jobTitle: {
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
        // companySize: {
        //     type: Number,
        //     min: 0,
        //     max: 5
        // },
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
        postedTime: {
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
            type: Number,
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
        },
        types: {
            type: [
                {
                    type: String,

                },
            ],
        },
        // rating: {
        //     type: Number,
        //     min: 0,
        //     max: 5
        // },
        // prices: {
        //     type: [
        //         {
        //             text: {
        //                 type: String,
        //                 
        //             },
        //             price: {
        //                 type: Number,
        //                 
        //             },
        //         },
        //     ],
        // },
        // extraOptions: {
        //     type: [
        //         {
        //             text: {
        //                 type: String,
        //                 
        //             },
        //             price: {
        //                 type: Number,
        //                 
        //             },
        //         },
        //     ],
        // },
    },
    { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);