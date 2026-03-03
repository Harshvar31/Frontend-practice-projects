let inc = document.querySelector('#ince');
let dec = document.querySelector('#dece');
let h1 = document.querySelector('h1');

let a = 0;

inc.addEventListener("click", function () {
    a++;

    h1.innerHTML = a;
});

dece.addEventListener("click", function () {
    a--;

    h1.innerHTML = a;
});