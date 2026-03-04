let main = document.querySelector('main');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let c1 = Math.random()*256
    let c2 = Math.random()*256
    let c3 = Math.random()*256


    setTimeout(() => {
        main.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    }, 100);
})