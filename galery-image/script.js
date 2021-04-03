const container = document.querySelector('.container');
const jumboo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    // jika salah satu gambar di click maka akan mengganti alamat img di class jumboo
    if (e.target.className == 'thumb') {
        jumboo.src = e.target.src;
        jumboo.classList.add('fade');
        setTimeout(function(){
            jumboo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb) {
            thumb.className = 'thumb';
        });
        e.target.classList.add('active');
    }
});