
window.onscroll = function () {
  var header = document.querySelector(".header");
  var headerTop = document.querySelector(".header-top");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
    headerTop.style.display = "none";
  } else {
    header.classList.remove("sticky");
    headerTop.style.display = "block";
  }
};
