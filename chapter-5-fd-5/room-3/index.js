// 1. panggil dulu module expressnya
const express = require ('express');
// 2. bikin variabel untuk menyimpan servernya
const app = express();
app.use(express.urlencoded());

// 4. TODO: Routing
app.get('/', function (req, res) {
    res.status(200).sendFile(__dirname + '/index.html');
});

app.post('/hitung-luas',luasBelahKetupat)
    // 3. kasih response ke client
    res.status(200).send('Luas:' + luas);
;

app.post('/hitung-keliling', function (req, res) {
    // 1. ambil data dari client
    const data = req.body;
    const sisi = data.sisi
 
    // 2. hitung keliling
    const keliling = 4*sisi;
    // 3. kasih response ke client
    res.status(200).send('keliling:' + keliling);
});

app.post('/hitung-luas-keliling', function(req, res) {
    // 1. ambil data dari client
    const data = req.body;
    const panjang = data.panjang;
    const lebar = data.lebar;
    const tipe = data.tipe;
    const sisi = data.sisi;


    // 2. cari tahu mau hitung luas belah ketupat
    let lu;
    let kel;
 
    if(tipe === 'luas') {
        // 3. hitung luas
        lu = panjang * lebar /2;
    } else {
        // 3. hitung keliling
        kel = 4*sisi;
    };
    // 3. hitung luas / keliling


    // 4. kasih response ke client
    res.status(200).json({
        luas: lu,
        keliling: kel
    });
})
// 3. Running servernya
const PORT = 3455;
app.listen(PORT, function () {
    console.log(`Server berjalan di localhost:${PORT}`);
});