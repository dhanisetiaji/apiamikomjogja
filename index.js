const express = require('express');
const bodyParser = require('body-parser');
const LoginUAY = require('./bin/functionapiamikom');
const morgan = require('morgan');
const port = process.env.PORT || 4000;

const app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('short'));

// app.get('/', (req, res) => {
//     res.redirect('/index.html')
// });


app.post('/presensi', async (req, res) => {
    const code = req.body.kode_presensi;
    const nim = req.body.nim;
    const apipresensiku = await LoginUAY.functionapiabsen(code, nim);
    if(apipresensiku.message == 'Created'){
        console.log(apipresensiku);
        res.redirect('/sukses.html');
    }
    else if(apipresensiku.message == 'BadRequest'){
        console.log(apipresensiku);
        res.redirect('/gagal.html');
    } 
    else{
        console.log(apipresensiku);
        res.redirect('/sudah.html');
    }
    res.end();
});

// app.get('/getlogin', async (req, res) => {
//     const { usernim, keynim } = req.query;
//     const sendlogin = await LoginUAY.functionapiLoginAmikom(usernim, keynim);
//     res.send(sendlogin);
// });

// app.get('/getbio', async (req, res) => {
//     const { tokenauth } = req.query;
//     const sendbio = await LoginUAY.functionBiodata(tokenauth);
//     res.send(sendbio);
// });

// app.get('/absen', async (req, res) => {
//     const { code, nim } = req.query;
//     const absenku = await LoginUAY.functionAbsensi(code, nim);
//     res.send(absenku);
// });


// app.get('/apipresensi', async (req, res) => {
//     const { c, n } = req.query;
//     const apipresensiku = await LoginUAY.functionapiabsen(c, n);
//     res.send(apipresensiku);
// });

// app.get('/jadwal', async (req, res) => {
//     const { tokenauth, nim, semsterj, tahunj } = req.query;
//     const jadwalcek = await LoginUAY.functionapiJadwal(tokenauth, nim, semsterj, tahunj );
//     res.send(jadwalcek);
// });

// app.get('/transkripnilai', async (req, res) => {
//     const { tokenauth, nim} = req.query;
//     const transkrip = await LoginUAY.functiontranskripnilai(tokenauth, nim);
//     res.send(transkrip);
// });

// app.get('/khs', async (req, res) => {
//     const {tokenauth, nim, semsterk, tahunk} = req.query;
//     const khsku = await LoginUAY.functionapikhs(tokenauth, nim, semsterk, tahunk);
//     res.send(khsku);
// })



app.listen(port, function(){
    console.log(`server berjalan pada port ${port}`);
});
