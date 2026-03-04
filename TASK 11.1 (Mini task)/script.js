let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let count = 5

    let int = setInterval(() => {
        console.log(count);
        count--;
    }, 1000);

    setTimeout(() => {
        clearInterval(int);
        console.log("Done");
    }, 5000);
})