const btnHumburger = document.querySelector(".humburger-btn");
const navList = document.querySelector(".navbar-list");
const listItems = document.querySelectorAll(".navbar-item");

btnHumburger.addEventListener("click", function () {
  btnHumburger.classList.toggle("humburger-btn--active");
  navList.classList.toggle("navbar-list--active");
});

listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    btnHumburger.classList.toggle("humburger-btn--active");
    navList.classList.toggle("navbar-list--active");
  });
});
