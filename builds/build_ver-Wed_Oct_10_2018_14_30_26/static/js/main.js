var listItem = document.querySelector(".header-content__select li:first-child");
var item = document.querySelectorAll(".header-content__select li");
listItem.addEventListener("click", showItems, false);
function showItems() {
    for (var i = 0; i < item.length; i++) {
        if (item[i].classList == "") {
            item[i].classList.add("re-active");
        } else {
            item[i].classList.remove("re-active");
        }
    }
}
var el = document.querySelectorAll(".summary-content__ul li:not(li:first-child) a");

el[0].style.color = "#0052B4";
el[1].style.color = "#0052B4";