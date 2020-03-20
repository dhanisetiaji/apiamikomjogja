const fetch = require ('node-fetch');
const readlineSync = require ('readline-sync');
const { URLSearchParams } = require ('url');


const functionapiLoginAmikom = (usernim, keynim) => new Promise((resolve, reject) => {
    const urlapi = 'http://mhsmobile.amikom.ac.id/login';
    const params = new URLSearchParams;
    params.append('username', usernim);
    params.append('keyword', keynim);

    fetch(urlapi, {
        method: 'POST',
        headers: {
            'User-Agent': 'AmikomMobile',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '33',
            'Host': 'mhsmobile.amikom.ac.id',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'
        },
        body: params

    })
    .then( res => res.json())
    .then( result => resolve(result))
    .catch(err => reject(err))
});

const functionapiJadwal = (tokenauth, npmjadwal, semesterjadwal, tahunjadwal) => new Promise((resolve, reject) => {
    const urlapi = 'http://mhsmobile.amikom.ac.id/api/personal/jadwal_kuliah';
    const params = new URLSearchParams;
    params.append('npm', npmjadwal);
    params.append('semester', semesterjadwal);
    params.append('tahun_akademik', tahunjadwal)

    fetch(urlapi, {
        method: 'POST',
        headers: {
            'User-Agent': 'AmikomMobile',
            Authorization : tokenauth,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '52',
            'Host': 'mhsmobile.amikom.ac.id',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'
        },
        body: params

    })
    .then( res => res.json())
    .then( result => resolve(result))
    .catch(err => reject(err))
});

const functionAbsensi = (codeabsen, nimabsen) => new Promise((resolve, reject) => {
    const urlabsensi = 'http://202.91.9.14:6000/api/presensi_mobile/validate_ticket';
    const bodyabsensi = {"data":`${codeabsen};${nimabsen}`}

    fetch(urlabsensi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Content-Length': '28',
            'Host': '202.91.9.14:6000',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.10.0'             
        },
        body: JSON.stringify(bodyabsensi)
    })
    .then( res => res.json())
    .then( result => resolve(result))
    .catch(err => reject(err))
});

const functionapikhs = (tokenauth, npmkhs, semesterkhs, tahunkhs) => new Promise((resolve, reject) => {
    const urlapi = 'http://mhsmobile.amikom.ac.id/api/krs/khs';
    const params = new URLSearchParams;
    params.append('npm', npmkhs);
    params.append('semester', semesterkhs);
    params.append('tahun_akademik', tahunkhs)

    fetch(urlapi, {
        method: 'POST',
        headers: {
            'User-Agent': 'AmikomMobile',
            Authorization : tokenauth,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '52',
            'Host': 'mhsmobile.amikom.ac.id',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'
        },
        body: params

    })
    .then( res => res.json())
    .then( result => resolve(result))
    .catch(err => reject(err))
});

const functiontranskripnilai = (tokenauth, npmtrans) => new Promise((resolve, reject) => {
    const urlapi = 'http://mhsmobile.amikom.ac.id/api/krs/transkrip';
    const params = new URLSearchParams;
    params.append('npm', npmtrans),

    fetch(urlapi, {
        method: 'POST',
        headers: {
            'User-Agent': 'AmikomMobile',
            Authorization : tokenauth,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '14',
            'Host': 'mhsmobile.amikom.ac.id',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'
        },
        body: params

    })
    .then( res => res.json())
    .then( result => resolve(result))
    .catch(err => reject(err))
});

const functionBiodata = (tokenauth) => new Promise((resolve, reject) => {
    const urlapi = 'http://mhsmobile.amikom.ac.id/api/personal/init_data_mhs';

    fetch(urlapi, {
        method: 'POST',
        headers: {
            'User-Agent': 'AmikomMobile',
            Authorization : tokenauth,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '14',
            'Host': 'mhsmobile.amikom.ac.id',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'
        }

    })
    .then( res => res.json())
    .then( result => resolve(result))
    .catch(err => reject(err))
});


module.exports = { 
    functionapiLoginAmikom,
    functionBiodata,
    functionAbsensi,
    functionapiJadwal,
    functiontranskripnilai,
    functionapikhs
}

// (async () => {
//     try{
//         const userN = readlineSync.question('Masukan Nim : ');
//         const keyN = readlineSync.question('Masukan Password : ')
//         const loginapi = await  functionapiLoginAmikom(userN, keyN);
//         const logintoken = loginapi.access_token;
//         const nimlogin = loginapi.userName;
//         console.log(loginapi);
//     }catch(e){
//         console.log(e)
//     }
// })();
