import mongoose from "mongoose";

const TypesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
  }
);

export default mongoose.models.Types || mongoose.model("Types", TypesSchema);