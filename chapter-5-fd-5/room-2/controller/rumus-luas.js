function hitungLuas(dariClient, untukClient){
    const data = dariClient.body
    const alas = data.alas
    const tinggi = data.tinggi
    const luas = alas * tinggi / 2 
    untukClient.status(200).send('Luas:' + luas)
};

module.exports = hitungLuas;