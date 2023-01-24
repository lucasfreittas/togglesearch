const btn = document.getElementById('btn');
const input = document.getElementById('search');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    input.classList.toggle('active');

    input.focus()
})