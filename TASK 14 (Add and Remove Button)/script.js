let allBtns = document.querySelectorAll('button');

allBtns.forEach(function(elems){
    elems.addEventListener('click',function(){

        if(elems.innerHTML == 'Add Friend'){
            elems.innerHTML = 'Remove Friend';
        } else {
            elems.innerHTML = 'Add Friend';
        }
    });
});