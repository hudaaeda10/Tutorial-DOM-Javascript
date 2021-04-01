// DOM pada getelements
// document.getElementById()
// document.getElementsByTagName();
// document.getElementsByClassName()

// menggunakan query selector
// document.querySelector
var p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '50px';

var li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// menggunaakan querySelectorAll() -> nodeList
const p = document.querySelectorAll('p');
for (var i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}