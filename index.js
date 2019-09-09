const express = require('express');
const bodyParser = require('body-parser');
const LoginUAY = require('./bin/functionapiamikom');
const port = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
    const login="<h2>GET list API dari Amikom One (hanya untuk pembelajaran node JS):</h2>/getlogin?usernim=&keynim=<br>/getbio?tokenauth=<br>/absen?code=&nim=<br>/jadwal?tokenauth=&nim=&semsterj=&tahunj=<br>/khs?tokenauth=&nim=&semsterk=&tahunk=<br>/transkripnilai?tokenauth=&nim=";
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

app.get('/transkripnilai', async (req, res) => {
    const { tokenauth, nim} = req.query;
    const transkrip = await LoginUAY.functiontranskripnilai(tokenauth, nim);
    res.send(transkrip);
});

app.get('/khs', async (req, res) => {
    const {tokenauth, nim, semsterk, tahunk} = req.query;
    const khsku = await LoginUAY.functiontranskripnilai(tokenauth, nim, semsterk, tahunk);
    res.send(khsku);
})



app.listen(port, function(){
    console.log(`server berjalan pada port ${port}`);
});
