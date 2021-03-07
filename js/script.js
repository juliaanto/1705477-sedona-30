let formButton = document.querySelector('.show-form-button');
let searchForm = document.querySelector('.hotel-search-form');

formButton.onclick = function() {
    searchForm.classList.toggle('visually-hidden');
};