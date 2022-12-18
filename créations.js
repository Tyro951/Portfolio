var darkmode = false;
const button = document.querySelector('button');
var button2 = document.getElementsByTagName('button')[1];
var image = document.getElementsByTagName('img')[1];
const h5 = document.querySelectorAll('h5');

function dark() {
   var element = document.body;   
   if (darkmode) {
     element.classList.replace("nightmode", "daymode");
     button.textContent = 'Dark mode'
   } else {
     element.classList.replace("daymode", "nightmode");
     button.textContent = 'Light mode'
   }
   darkmode = !darkmode
 }


button2.addEventListener('click', function(){
  image.style.display = (image.style.display == "block") ? "none" : "block";
})