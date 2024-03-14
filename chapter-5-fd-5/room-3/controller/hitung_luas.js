function luasBelahKetupat (req, res) {
    // 1. ambil data dari client
    const data = req.body;
    const panjang = data.panjang;
    const lebar = data.lebar;
    // 2. hitung luas
    const luas = panjang * lebar/2;
}