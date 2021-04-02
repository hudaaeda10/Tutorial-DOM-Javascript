//  Cara Huda ==============================
// // Mengganti warna 
// // tangkap class nya
// const body = document.querySelector('body');
// const warnaHijau = document.getElementById('warna-1');
// const warnaMerah = document.getElementById('warna-2');
// const warnaBiru = document.getElementById('warna-3');
// const warnaPutih = document.getElementById('reset');
// // buat event ketika di klik
// function Hijau() {
//     body.style.backgroundColor ='green';
// }
// function Merah() {
//     body.style.backgroundColor ='red';
// }
// function Biru() {
//     body.style.backgroundColor ='blue';
// }
// function White() {
//     body.style.backgroundColor ='white';
// }

// // jalankann event ganti warna
// warnaHijau.onclick = Hijau;
// warnaMerah.onclick = Merah;
// warnaBiru.onclick = Biru;
// warnaPutih.onclick = White;



// Cara Pak Sandika =============================================
// CASE 1 :   membuat tombol yang berubah warna
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

//  Case 2 : Membuat tombol yang mengganti warna background secara acak
// buat tombol
const tAcakWarna = document.createElement('button');
const textAcakWarna = document.createTextNode('Acak Warna');

tAcakWarna.appendChild(textAcakWarna);
tAcakWarna.setAttribute('type', 'button');

tUbahWarna.after(tAcakWarna);

// buat event
tAcakWarna.addEventListener('click', function() {
    // membuat kode random untuk rgb
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+' , '+g+', '+b+')';
});

//  Case 3 : Mengeser RGB
const sMerah = document.querySelector('input[name="sMerah"]');
const sHijau = document.querySelector('input[name="sHijau"]');
const sBiru = document.querySelector('input[name="sBiru"]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
});
sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
});
sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
});


// case 4 : Mengubah warna sesuai gerakan cursor
document.addEventListener('mousemove', function() {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY/window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+xPos+', '+yPos+', 1000)';
}); 