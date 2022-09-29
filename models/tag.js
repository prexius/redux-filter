import mongoose from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
  }
);

export default mongoose.models.Tag || mongoose.model("Tag", TagSchema);