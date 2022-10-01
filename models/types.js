import mongoose from "mongoose";

const TypesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    checked: {
      type: Boolean,
    },

  }
);

export default mongoose.models.Types || mongoose.model("Types", TypesSchema);