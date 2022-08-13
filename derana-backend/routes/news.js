import express from "express";
import { multipleUpload } from "../middleware/multer.js";
import auth from "../middleware/auth.js";
import { Addnews, getAllNews, getSportNews, getTechNews, getGalleryNews, Updatenews, getnews, Deletenews } from "../controllers/news.js";
const router = express.Router();


router.post("/addnews", multipleUpload, Addnews)
router.get("/getallnews", getAllNews);
router.get("/getsportnews", getSportNews);
router.get("/gettechnews", getTechNews);
router.get("/getgallerynews", getGalleryNews);
router.get("/getnews/:id", getnews);
router.put("/updatenews/:id", multipleUpload, Updatenews)
router.delete("/deletenews/:id", Deletenews);


export default router;