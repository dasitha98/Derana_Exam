import express from "express";
import { multipleUpload } from "../middleware/multer.js";
import auth from "../middleware/auth.js";
import { signup, Allusers, signin ,TokenLink} from "../controllers/user.js";

const router = express.Router();

router.post("/signup", multipleUpload, signup);
router.post("/signin", multipleUpload, signin);
router.post("/tokenlink", multipleUpload, TokenLink);

router.get("/get", Allusers);


export default router;