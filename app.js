const express = require("express");
const http = require("http");
const path = require("path");
require("./db/mongoConnect");
const router = express.Router();
const { routesInit } = require("./routes/configRoutes");

const app = express();
app.use(express.json());
routesInit(app);
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
server.listen(3001);
