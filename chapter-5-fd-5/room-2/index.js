const express = require("express");
const PORT = 6789;
const server = express();
server.use(express.urlencoded());

// todo : Controller
const lihat_history = require("./controller/lihat-history");
const rumusLuas= require('./controller/rumus-luas')
const rumusKeliling = require('./controller/rumus-keliling')

// todo : Routing
server.get("/lihat-history", lihat_history);

server.post('/hitung-luas', rumusLuas)

server.post('/hitung-keliling', rumusKeliling)

server.listen(PORT, () => {
  console.log("🚀 ~ server.listen ~ PORT:", PORT);
});