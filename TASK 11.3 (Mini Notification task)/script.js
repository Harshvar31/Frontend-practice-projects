let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

start.addEventListener('click', function(){
    let id = setInterval(() => {
        console.log("Hey! Keep coding!");
    }, 2000);

    stop.addEventListener('click',function(){
    setTimeout(() => {
        clearInterval(id);
    },0);
    });
});

