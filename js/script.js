const formButton = document.querySelector(".show-form-button");
const searchForm = document.querySelector(".hotel-search-form");
const arrivalDate = searchForm.querySelector(".arrival-date");
const departureDate = searchForm.querySelector(".departure-date");
const adultAmount = searchForm.querySelector(".adult-amount");
const childAmount = searchForm.querySelector(".child-amount");

searchForm.classList.add("hidden");

formButton.addEventListener("click", function (evt) {
    searchForm.classList.toggle("hidden");

    if (storageAdult || storageChild) {
      adultAmount.value = storageAdult;
      childAmount.value = storageChild;
    }
});

let isStorageSupport = true;
let storageAdult = "";
let storageChild = "";

try {
  storageAdult = localStorage.getItem("adultAmount");
  storageChild = localStorage.getItem("childAmount");
} catch (err) {
  isStorageSupport = false;
}

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adultAmount.value || !childAmount.value) {
    evt.preventDefault();
    searchForm.classList.remove("modal-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultAmount", adultAmount.value);
      localStorage.setItem("childAmount", childAmount.value);
    }
  }
});
