const express = require("express");
const PORT = 6789;
const server = express();
server.use(express.urlencoded());

// todo : Controller
const lihat_history = require("./controller/lihat-history");
const hitungLuas = require("../room-2/controller/rumus-luas")
const hitungKeliling =require("../room-2/controller/rumus-keliling")

// todo : Routing
server.get("/lihat-history", lihat_history);

server.post('/hitung-luas', hitungLuas)

server.post('/hitung-keliling', hitungKeliling)

server.listen(PORT, function(){
  console.log(`Server berjalan di localhost:${PORT}`);
});