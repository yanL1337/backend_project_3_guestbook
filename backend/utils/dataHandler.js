import fs from "fs/promises";
import fsystem from "fs";
import { v4 } from "uuid";
import Joi from "joi";

const PATH = "./users";

export const setup = () => {
  fs.access(PATH)
    .then(() => console.log("izz da"))
    .catch(() => {
      fs.mkdir(PATH);
    });
};

export const createContent = (content) => {
  content.id = v4();
  //   const { error, value } = schema.validate(content);
  //   if (error) {
  //     console.log("ERROR: " + error.details[0].message);
  //     return;
  //}

  fs.writeFile(PATH + `/${v4()}`, JSON.stringify(content));
};

export const getAll = () => {
  //const files = [];
  return fs.readdir(PATH).then((files) => {
    const all = [];

    for (const file of files) {
      all.push(JSON.parse(fsystem.readFileSync("./" + PATH + "/" + file)));
    }
    return all;
  });
};
