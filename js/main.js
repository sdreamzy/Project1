var tab1 = document.querySelectorAll(".nav-tab");
var tab2 = document.querySelectorAll(".tab-panel");

for (var i = 0; i < tab1.length; i++) {
   tab1[i].addEventListener("click", function (e) {
      e.preventDefault();
      var activeTabAttr = e.target.getAttribute("data-tab");

      for (var j = 0; j < tab1.length; j++) {
         var contentAttr = tab2[j].getAttribute("data-tab-content");

         if (activeTabAttr === contentAttr) {
            tab1[j].classList.add("active-nav");
            tab2[j].classList.add("active-panel");
         } else {
            tab1[j].classList.remove("active-nav");
            tab2[j].classList.remove("active-panel");
         }
      }
   })
}
      function myFunction(){
var x = document.getElementByClassName("input");
var y = document.getElementById("hide1");
var z = document.getElementById("hide2");

if(x.type === 'password'){
   x.type = "text";
   y.style.display = "block";
   z.style.display = "none";
}
else{
   x.type = "password";
   y.style.display = "none";
   z.style.display = "block";
   }
}
function darkmode(){
   const body = document.body
   const wasDarkmode = localStorage.getItem('darkmode') ==='true'

   localStorage.setItem('darkmode', !wasDarkmode)
   body.classList.toggle('dark-mode', !wasDarkmode)
   document.querySelector('.img2').style.display="flex";
   document.querySelector('.image__item').style.display="none";
}

document.querySelector('.switch').addEventListener('click', darkmode)

function loggining() {
   document.querySelector(".modal").style.display="none";
}
function logexit(){
   document.querySelector(".modal").style.display="none";
}