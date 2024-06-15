import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json())
// app.use(express.urlencoded())

import urlRoute from "./routers/url.routes.js"


app.use("/url",urlRoute)

export {app}