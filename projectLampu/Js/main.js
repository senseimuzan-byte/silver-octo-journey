function sakelar() {
   let toggle = document.getElementById("toggle");
   let lamp = document.getElementById('lamp1');
   if(toggle.checked) {
    lamp.src = "assets/images/on.gif"
      document.body.style.background="white"
   }else {
    lamp.src= "assets/images/off.gif"
  
    document.body.style.background="black"
   }

}