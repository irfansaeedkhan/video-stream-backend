import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const app = express();

// professional way to connect to db importing from different
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!! ", error);
  });

// normal way to connect to db directly inside index.js
/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    application.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    application.listen(process.env.PORT, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    })

  } catch (error) {
    console.log("error", error);
    throw error;
  }
})();

*/
