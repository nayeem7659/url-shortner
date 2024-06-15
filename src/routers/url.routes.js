import { Router } from "express";
import {
  generateShortURL,
  redirectUrl,
} from "../controllers/urlShortner.controller.js";

const router = Router();

router.route("/:id").get(redirectUrl);
router.route("/").post(generateShortURL);

export default router;
