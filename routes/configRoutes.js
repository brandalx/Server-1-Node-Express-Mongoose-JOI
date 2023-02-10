const indexR = require("./index");
const booksR = require("./books");

exports.routesInit = (app) => {
  app.use("/", indexR);
  app.use("/s1books", booksR);
};
