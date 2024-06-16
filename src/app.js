import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

// start

dotenv.config();

app.use(cors());

app.use(express.json());
// app.use(express.urlencoded())

import urlRoute from "./routers/url.routes.js";

app.use("/", urlRoute);

export { app };
