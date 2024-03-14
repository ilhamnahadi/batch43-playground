const express = require("express");
const PORT = 6789;
const server = express();
server.use(express.urlencoded());

// todo : Controller
const lihat_history = require("./controller/lihat-history");
const rumusLuas = require("../room-2/controller/rumus-luas")
const rumusKeliling =require("../room-2/controller/rumus-keliling")

// todo : Routing
server.get("/lihat-history", lihat_history);

server.post('/hitung-luas', rumusLuas)

server.post('/hitung-keliling', rumusKeliling)

server.listen(PORT, function(){
  console.log(`Server berjalan di localhost:${PORT}`);
});