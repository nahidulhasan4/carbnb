window.addEventListener("scroll", function(){
    let header=  document.querySelector(".header");
    let headerTop = document.querySelector(".header-top")
   if( header.classList.toggle('sticky', window.scrollY > 0 === true)){
    headerTop.style.display ="none";
    let sticky= document.querySelector("sticky")
    header.classList.remove("header")
    sticky.sytle.position ="sticky"
   }else{
    headerTop.style.display ="inline-block";
   
   }

})