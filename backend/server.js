import express from "express";
import cors from "cors";
import Joi from "joi";
import multer from "multer";
import { createContent, getAll, setup } from "./utils/dataHandler.js";

const PORT = 1337;
const server = express();
const upload = multer();

server.use(cors());
server.use(express.json());

setup();

// server.get("/", (req, res) => {
//   res.json(req.body);
// });

const schema = Joi.object({
  firstName: Joi.string().min(3).max(15).required(),
  lastName: Joi.string().min(3).max(15).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(1).max(30).required(),
  //id: Joi.string().required(),
});

server.post("/", upload.none(), (req, res) => {
  console.log(req.body);
  const { error, value } = schema.validate(req.body);
  if (error) {
    console.log(error.message);
    return;
  }

  createContent(value);
  res.end();
});

server.get("/", (req, res) => {
  getAll().then((data) => {
    res.json(data);
    //console.log(data);
  });
});

server.listen(PORT, () => console.log(`feuert von Port: ${PORT}`));
