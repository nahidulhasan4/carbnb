window.addEventListener("scroll", function(){
    let header=  document.querySelector(".header");
    let headerTop = document.querySelector(".header-top")
    let ScroolE = header.classList.toggle('sticky', window.scrollY > 0);

   if( ScroolE === true){
    headerTop.style.display ="none";
    let sticky= document.querySelector("sticky")
    header.classList.remove("header")
    sticky.sytle.position ="sticky"
   }else{
    headerTop.style.display ="inline-block";
   
   }

})
window.addEventListener("scroll", function(){
    let header=  document.querySelector(".sticky");
    
    let ScroolE = header.classList.toggle('header', window.scrollY < false);
    
})