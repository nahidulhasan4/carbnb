
window.onscroll = function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
   
  } else {
    header.classList.remove("sticky");
  
  }
};
