import express from "express";
dotenv.config();

import cors from "cors";
import dotenv from "dotenv";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
// app.use(express.urlencoded())

import urlRoute from "./routers/url.routes.js";

app.use("/", urlRoute);

export { app };
