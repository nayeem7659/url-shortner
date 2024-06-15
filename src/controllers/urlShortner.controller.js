import { nanoid } from "nanoid";
import URL from "../models/urlShortner.model.js";

const generateShortURL = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      error: "url is required.",
    });
  }

  const shortURL = nanoid(8);
  await URL.create({
    shortUrl: shortURL,
    redirectURL: url,
    clicks: [],
  });

  return res.json({ id: shortURL });
};

const redirectUrl = async (req, res) => {
  const shortUrl = req.params.id;
  console.log(req.params.id);
  const entry = await URL.findOneAndUpdate(
    {
      shortUrl: shortUrl,
    },
    {
      $push: {
        clicks: { timestamp: Date.now() },
      },
    }
  );
  console.log(entry);
  res.redirect(entry.redirectURL);
};

export { generateShortURL, redirectUrl };
