import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { config } from "dotenv";

const app = express();

// set cors from where the request will come from
app.use(
  cors({
    origin: [process.env.CORS_ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// limit how much data will be accepted to be saved in db
app.use(
  express.json({
    limit: "16kb",
  })
);

// to get data from url encoded format
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

// to get data from cookies and apply crud operations, secure cookies on browser
app.use(cookieParser());

// to get data from static files also add to this folder so people can see
app.use(express.static("public"));

config({ path: "./config/config.env" });
const PORT = process.env.PORT || 8000;
