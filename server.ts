// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("src/data/db.json");
const middlewares = jsonServer.defaults();

const url = "http://localhost:3004/songs/";
const playlistUserUrl = "http://localhost:3005/songs/";

server
  .use(middlewares)
  .get(url, (req, res) => {
    res.json(req.query);
  })
  .use(router)
  .listen(3004, () => {
    console.log("JSON Server is running");
  });
