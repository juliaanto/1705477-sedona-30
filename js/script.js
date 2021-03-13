let formButton = document.querySelector('.show-form-button');
let searchForm = document.querySelector('.hotel-search-form');

searchForm.classList.add('hidden');

formButton.addEventListener('click', (e) => {
    searchForm.classList.toggle('hidden');
});