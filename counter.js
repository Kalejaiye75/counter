const numEl = document.getElementById('num');
const bigbuttonEl = document.getElementById('bigbutton');
const smallbuttonEl = document.getElementById('smallbutton')
bigbuttonEl.addEventListener('click', () =>{
    const numElValue = parseInt(numEl.textContent)
    numEl.textContent = numElValue - 1
})
smallbuttonEl.addEventListener('click', () =>{
    const numElValue = parseInt(numEl.textContent)
    numEl.textContent = numElValue + 1
})