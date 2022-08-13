import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  categoryName: { type: String, required: true, unique: true },
});

export default mongoose.model("Category", categorySchema);