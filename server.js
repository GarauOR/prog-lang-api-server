"use strict";

const express = require("express");
const progLangs = require("./assets/Programming-languages.json");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => res.send("whatever"));

app.get("/prog_lang", (req, res) => {
  try {
    const langList = progLangs.map((item) => {
      return new ProgLang(item)
    });
    res.status(200).send(langList);
  } catch (error) {
    res.status(500).send(error);
  }
});

class ProgLang {
    constructor(data) {
      this.title = data.title;
      this.dateCreated = data.dateCreated;
      this.description = data.description;
      this.imageUrl = data.imageUrl;
    }
  }

app.listen(PORT, ()=>{console.log(`listening to port ${PORT}`)});
