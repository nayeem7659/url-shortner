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
    url: shortURL,
    redirectURL: url,
    clicks: [],
  });

  return res.json({ id: shortURL });
};

const redirectUrl = async (req, res) => {
  const shortUrl = req.params.id;
  const entry = await URL.findOneAndUpdate(
    {
      url: shortUrl,
    },
    {
      $push: {
        clicks: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectURL);
};

const getUrlClicks = async (req, res) => {
  const id = req.params.id;
  const info = await URL.findOne({
    url: id,
  });
  if (!info) {
    return res.status(400).json({
      error: "Url has not Found",
    });
  }
  console.log(info);
  res.json({
    urlData: info,
  });
};

export { generateShortURL, redirectUrl, getUrlClicks };
