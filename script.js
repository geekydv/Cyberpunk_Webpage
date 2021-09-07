document.addEventListener("mousemove", function (e) {
    const cpbg = document.querySelector('.cpbg');
    const cp = document.querySelector('.cp');
    const cpV = document.querySelector('.cpV');
    


    cpbg.style.width = 100 + e.pageX / 100 + '%';
    cpbg.style.height = 100 + e.pageX / 100 + '%';

    cp.style.left = 300 - e.pageX / 20 + 'px';
    cpV.style.left = 500 + e.pageX / 20 + 'px';

});

document.getElementById('plot').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'flex';
});

document.querySelector('.closebtn').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none';
});




