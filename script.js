// DOM Selection 
// document.getElementById() -> elemet
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Huda Aeda';

// document.getElementsByTagsName()  ->HTML Collection
const p = document.getElementsByTagName('p');

for (let i=0; i<p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

// walau hanya 1 element yang diambil dengan tag name dapat diubah dari
// HTML Collection menjadi element 
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTML collection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Diganti dengan javascript';
