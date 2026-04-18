let para = document.querySelector("p");
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let text = para.innerText
let iteration = 0

let interval = null
para.addEventListener('mouseenter', () => {

    clearInterval(interval);
    let iteration = 0
    interval = setInterval(() => {

        let str = text.split('').map((char , index) => {
            if(index < iteration){
                return char
            }
            return characters.split("")[Math.floor(Math.random()*characters.length)]
        }).join("")
        para.innerText = str

        if(iteration >= text.length){
            clearInterval(interval)
        }
        iteration += 0.6;

    }, 50);
});

para.addEventListener('mouseleave', () => {

    clearInterval(interval)
    iteration = text.length
    interval = setInterval(() => {
        
        let str2 = text.split('').map((char, index) => {

            if(index < iteration){
                return char
            }
            return characters.split('')[Math.floor(Math.random()*characters.length)]
        }).join('');

        para.innerText = str2

        if(iteration <= 0){
            clearInterval(interval);
        }

        iteration -= 1
    }, 50);
})