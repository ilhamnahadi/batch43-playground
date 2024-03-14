function hitungLuas(req, res){
    const data = req.body
    const alas = data.alas
    const tinggi = data.tinggi
    const luas = alas * tinggi / 2 
    res.status(200).send('Luas:' + luas)
};

module.exports = hitungLuas;