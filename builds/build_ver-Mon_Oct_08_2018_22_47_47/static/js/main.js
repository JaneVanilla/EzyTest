var listItem = document.querySelector(".header-content__select li:first-child");
var item1 = document.querySelector(".header-content__select li:nth-child(2)");
console.log(item1);
var item2 = document.querySelector(".header-content__select li:nth-child(3)");
var item3 = document.querySelector(".header-content__select li:nth-child(4)");
listItem.addEventListener("click", showItems);
function showItems() {
     item1.classList.add = "re-active";
     item2.classList.add = "re-active";
     item3.classList.add = "re-active";
}