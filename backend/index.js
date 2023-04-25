import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import { allowingCors } from "./src/utils/allowing.cors.js";
import { config } from "dotenv";
import rootRoutes from "./src/routes/root.route.js";
import { mongooseConnection } from "./src/config/database.js";
import path from 'path';
import fs from 'fs';

config();

const app = express();
app.use(logger("dev")); 
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use((req, res, next) => allowingCors(req, res, next));
app.options("/*", (_, res) => {
  res.sendStatus(200);
});
app.use("/api", rootRoutes);

// Get Images
app.get('/get-file/:folder/:file', (req, res) => {
  const folderName = req.params.folder;
  const fileName = req.params.file;
  const filePath = path.join(process.cwd(), 'src', 'assets', folderName, fileName);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {      
      let defaultImage = path.join(process.cwd(), 'src', 'assets', 'images', 'Image_not_available.png');
      res.sendFile(defaultImage);
    } else {
      res.sendFile(filePath);
    }
  });
});

// BOILER PLATE MONGOOSE CONNECTION AND SERVER STARTED
mongooseConnection(app);
