const container = document.querySelector('.cols1');

document.querySelector('.slider').addEventListener('input', (e)=> {
    container.style.setProperty('--position', `${e.target.value}%`);
})