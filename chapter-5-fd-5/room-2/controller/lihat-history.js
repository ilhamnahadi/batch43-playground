const history = require("../model/history");

function lihat_history(req, res) {
  res.status(200).json({ data: history });
}

module.exports = lihat_history;
