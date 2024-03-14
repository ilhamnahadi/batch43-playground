const history = require("../model/history")

function hitungKeliling(req, res){
    const data = req.body
    const alas = data.alas
    const tinggi = data.tinggi
    const keliling = alas+ 2 * tinggi
    res.status(200).send('Keliling:' + keliling)

    history.push({
        Alas : alas,
        Tinggi : tinggi,
        Keliling: keliling
    })
};

module.exports = hitungKeliling;