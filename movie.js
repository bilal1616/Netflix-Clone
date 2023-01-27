//search
let search = document.querySelector('i#search')
let inputSearch = document.createElement('input')
let divSearch = document.querySelector('.searchMovies')

search.addEventListener("click", () => {
    divSearch.style.transition = "3s"
    inputSearch.placeholder = 'içerik,kişi,tür'
    divSearch.appendChild(inputSearch)
    divSearch.style.border = "1px solid white"   
})


//notifications
let notifications = document.querySelector("#header-right i#bell")
let notificationsBanner = document.querySelector('section#banner-Notifications')
notifications.addEventListener("click",() => {
    notificationsBanner.classList.toggle('open')
})

//profiles
let profileIcon = document.querySelector('#profile i')

profile.addEventListener('mouseover', () => {
    profileIcon.style.transition = ".1s"
    profileIcon.style.transform = "rotateX(180deg)"
})

profile.addEventListener('mouseout', () => {
    profileIcon.style.transition = ".1s"
    profileIcon.style.transform = "rotateX(-360deg)"
})




/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright(){
  document.getElementById("section3").scrollLeft += 400;
}
function scrollleft(){
  document.getElementById("section3").scrollLeft -= 400;
}
/*CARD_SCROLLERENDS*/

/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright1(){
  document.getElementById("section4").scrollLeft += 400;
}
function scrollleft1(){
  document.getElementById("section4").scrollLeft -= 400;
}
/*CARD_SCROLLERENDS*/

/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright2(){
  document.getElementById("section5").scrollLeft += 400;
}
function scrollleft2(){
  document.getElementById("section5").scrollLeft -= 400;
}
/*CARD_SCROLLERENDS*/

/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright3(){
  document.getElementById("section6").scrollLeft += 400;
}
function scrollleft3(){
  document.getElementById("section6").scrollLeft -= 400;
}
/*CARD_SCROLLERENDS*/

/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright4(){
  document.getElementById("section7").scrollLeft += 400;
}
function scrollleft4(){
  document.getElementById("section7").scrollLeft -= 400;
}
/*CARD_SCROLLERENDS*/

/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright5(){
  document.getElementById("section8").scrollLeft += 400;
}
function scrollleft5(){
  document.getElementById("section8").scrollLeft -= 400;
}
/*CARD_SCROLLERENDS*/

/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright6(){
  document.getElementById("section9").scrollLeft += 400;
}
function scrollleft6(){
  document.getElementById("section9").scrollLeft -= 400;
}
/*CARD_SCROLLERENDS*/


/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright7(){
  document.getElementById("section10").scrollLeft += 400;
}
function scrollleft7(){
  document.getElementById("section10").scrollLeft -= 400;
}