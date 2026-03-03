let arr = [
    {
        team : "CSK",
        primary : "yellow",
        secondary : "blue",
        captain : "Mahendra Singh Dhoni"
    },
    {
        team : "MI",
        primary : "blue",
        secondary : "gold",
        captain : "Rohit Sharma"
    },
    {
        team : "RCB",
        primary : "red",
        secondary : "black",
        captain : "Virat Kohli"
    },
    {
        team : "KKR",
        primary : "purple",
        secondary : "gold",
        captain : "Ajinkya Rahane"
    },
    {
        team : "PBKS",
        primary : "crimson",
        secondary : "silver",
        captain : "Shreyas Iyer"
    },
    {
        team : "RR",
        primary : "pink",
        secondary : "navyblue",
        captain : "Sanju Samson"
    },
    {
        team : "SRH",
        primary : "orange",
        secondary : "black",
        captain : "Pat Cummins"
    },
    {
        team : "DC",
        primary : "blue",
        secondary : "red",
        captain : "Rishabh Pant"
    }

];

let box = document.querySelector('#box');
let btn = document.querySelector('button');
let main = document.querySelector('body');
let h1 = document.querySelector('h1');

btn.addEventListener('click', function(){
    let a = Math.floor(Math.random()*arr.length)
    
    h1.innerHTML = [arr[a].team , arr[a].captain];
   
    h1.style.backgroundColor = arr[a].secondary;
    main.style.backgroundColor = arr[a].primary;
})