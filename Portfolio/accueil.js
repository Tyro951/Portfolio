var darkmode = false;
const button = document.querySelector('button');

function dark() {
   var element = document.body;   
   if (darkmode) {
     element.classList.replace("nightmode", "daymode");
     button.textContent = 'Dark mode'
   } else {
     element.classList.replace("daymode", "nightmode");
     button.textContent = 'Light mode'
   }
   darkmode = !darkmode;
 }

