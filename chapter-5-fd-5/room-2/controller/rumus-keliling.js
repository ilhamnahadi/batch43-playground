function hitungKeliling(dariClient, untukClient){
    const data = dariClient.body
    const alas = data.alas
    const tinggi = data.tinggi
    const keliling = alas+ 2 * tinggi
    untukClient.status(200).send('Keliling:' + keliling)
};

module.exports = hitungKeliling;