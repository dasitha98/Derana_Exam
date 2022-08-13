import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  img: { type: String, required: true },
  // img: Array,
});

export default mongoose.model("News", newsSchema);