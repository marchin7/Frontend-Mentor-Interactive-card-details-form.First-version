const form = document.getElementById('form');
const thank = document.getElementById('thank');

const confirmBtn = document.getElementById('confirm-btn');
const continueBtn = document.getElementById('continue-btn');

form.addEventListener('submit', (e)=>{
    e.preventDefault();  
})

confirmBtn.addEventListener('click', ()=>{
    form.style.display = 'none';
    thank.style.display = 'block';
});

continueBtn.addEventListener('click', ()=>{
    form.style.display = 'flex';
    thank.style.display = 'none';
})