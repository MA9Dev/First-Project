
const btn=document.querySelector('.btn');
const body=document.querySelector('body');
btn.addEventListener('click', e => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    body.style.backgroundColor = `rgb(${r},${g},${b})`;})