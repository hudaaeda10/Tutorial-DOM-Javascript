// melakukan event hendler dengan onClick
// mengubah paragraph 3 menjadi warna biru cerah 
// menggunakan innerHTML
const p3 = document.querySelector('.p3');
function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}

// menggunakan method
function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;


// metode addEvenetListener()
// membuat element baru ketika klik paragraph 4
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    // buat item baru
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});