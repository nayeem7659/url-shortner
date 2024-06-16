import { Router } from "express";
import {
  generateShortURL,
  getUrlClicks,
  redirectUrl,
} from "../controllers/urlShortner.controller.js";

const router = Router();

router.route("/:id").get(redirectUrl);
router.route("/").post(generateShortURL);
router.route("/analytics/:id").get(getUrlClicks);

export default router;
