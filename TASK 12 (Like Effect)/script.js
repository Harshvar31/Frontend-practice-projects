
let img = document.querySelector('img');
let love = document.querySelector('#love');

img.addEventListener('dblclick',() => {

   love.style.opacity = 0.9;
   love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';

   let randomRotate = (Math.random()*1440) - 720;
   let randomX = (Math.random()*100) - 50;

   setTimeout(() => {
    love.style.transform = `translate(${randomX}%, -300%) scale(1) rotate(${randomRotate}deg)`;
   }, 800);

   setTimeout(() => {
    love.style.opacity = 0;
   }, 1000);

   setTimeout(() => {
    love.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)';
   }, 1200);
    
});