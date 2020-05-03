const fetch = require ('node-fetch');
const readlineSync = require ('readline-sync');
const { URLSearchParams } = require ('url');
const Encryption = require('./triple_des');

// const encrypt = Encryption.encrypt('cvpPAkShNnlaWxalqtKerQCyFakYvROEfAgV', 'ShdsS:18.11.2199');
// console.log(encrypt);

// const decrypt = Encryption.decrypt('cvpPAkShNnlaWxalqtKerQCyFakYvROEfAgV', 'vmSOKpnfTWKfPu/shkx9jCakisSi5+HZ');
// console.log(decrypt);

const functionAbsensi = (codeabsen, nimabsen) => new Promise((resolve, reject) => {
    const urlabsensi = 'http://202.91.9.14:6000/api/v1.1/presensi_mobile/validate_ticket';
    const encrypt = Encryption.encrypt('cvpPAkShNnlaWxalqtKerQCyFakYvROEfAgV', `${codeabsen};${nimabsen}`);
    var decrypt = Encryption.decrypt('cvpPAkShNnlaWxalqtKerQCyFakYvROEfAgV', `${encrypt}`)
    console.log(encrypt)
    console.log(decrypt)
    const bodyabsensi = {"data":`${encrypt}`}

    fetch(urlabsensi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Host': '202.91.9.14:6000',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.10.0',
            'X-Api-Key': 'XWnSRsMMwlLRGyotUiQwpaIMvhEAJuDtZvHE'              
        },
        body: JSON.stringify(bodyabsensi)
    })
    .then( res => res.json())
    .then( result => resolve(result))
    .catch(err => reject(err))
});

(async () => {
    try{
        const Code = readlineSync.question('Code : ');
        const Nim = readlineSync.question('Nim : ')
        const loginapi = await  functionAbsensi(Code, Nim);
        console.log(loginapi);
    }catch(e){
        console.log(e)
    }
})();