var menuCls = document.querySelector(".cls")
var menuBtn = document.querySelector(".navbar-toggler")//icon
var menu = document.querySelector(".menu-items")//menu

//event listener
menuBtn.addEventListener("click",function(){
    menu.classList.toggle("active")
})

menuCls.addEventListener("click",function(){
    menu.classList.toggle("active")
})