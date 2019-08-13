const express = require('express');
const bodyParser = require('body-parser');
const LoginUAY = require('./bin/functionapiamikom');
const port = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
    const login="<h1>get list:</h1>/getlogin?usernim=&keynim<br>/getbio?tokenauth=<br>/absen?code=&nim=";
    res.send(login);
});

app.get('/getlogin', async (req, res) => {
    const { usernim, keynim } = req.query;
    const sendlogin = await LoginUAY.functionapiLoginAmikom(usernim, keynim);
    res.send(sendlogin);
});

app.get('/getbio', async (req, res) => {
    const { tokenauth } = req.query;
    const sendbio = await LoginUAY.functionBiodata(tokenauth);
    res.send(sendbio);
});

app.get('/absen', async (req, res) => {
    const { code, nim } = req.query;
    const absenku = await LoginUAY.functionAbsensi(code, nim);
    res.send(absenku);
});

app.get('/jadwal', async (req, res) => {
    const { tokenauth, nim, semsterj, tahunj } = req.query;
    const jadwalcek = await LoginUAY.functionapiJadwal(tokenauth, nim, semsterj, tahunj );
    res.send(jadwalcek);
});

app.listen(port, function(){
    console.log(`server berjalan pada port ${port}`);
});
