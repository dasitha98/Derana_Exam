import express from "express";
import { multipleUpload } from "../middleware/multer.js";
import auth from "../middleware/auth.js";
import { Addcategory, Findcategory } from "../controllers/category.js";

const router = express.Router();

router.post("/add", auth, multipleUpload, Addcategory);
router.get("/get", auth, Findcategory);


export default router;