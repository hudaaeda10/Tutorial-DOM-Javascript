// DOM Manipulation
// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraph Baru');

// rangkai element dengan teks
pBaru.appendChild(teksPBaru);

// letakkan element ke tempat yang diinginkan
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// menambah element di tengah2 / bukan diakhir
const liBaru = document.createElement('li');
const liText = document.createTextNode('Item Baru');

liBaru.appendChild(liText);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// pemasangan ke element setelah item 1
ul.insertBefore(liBaru, li2);

// menghapus element
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// melakukan replace
const sectionB = document.getElementById('b');
const a = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const h2Text = document.createTextNode('Judul Baru');
h2Baru.appendChild(h2Text);

sectionB.replaceChild(h2Baru, a);

pBaru.style.backgroundColor ='lightblue';
liBaru.style.backgroundColor ='lightblue';
h2Baru.style.backgroundColor ='lightblue';

