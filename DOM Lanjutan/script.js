// menghapus div card ketika simbol silang di klik

// cara Huda ========================================
// const hapus = document.querySelector('.close');
// const card = document.querySelector('.card');
// hapus.addEventListener('click', function(){
//     card.remove();
// });



//  Cara Pak Sandika +=============================================
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });


// DOM Traversal ==============================
const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e){
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

//  cara lebih singkat dan menarik =================================================================
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    })
});

const nama = document.querySelector('.nama');
// console.log(nama.parentElement);         // memanggil element orang tuanya atau parent
// console.log(nama.nextSibling);  // memanggil saudara dalam bentuk (node) atau satu orang tuanya di bawah element yang dipilih (termasuk enter)
// console.log(nama.nextElementSibling);  // memanggil bener2 elementnya setelahnya