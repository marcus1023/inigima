// module function list
// homepageCtlr()
console.log(homepageCtlr.testimonials.sarah)

// module functions
function changeTesti(testi){
  console.log(testi)
  document.getElementById("clientTestiImg").src = testi.img
  document.getElementById("clientTestiName").innerHTML = testi.name
  document.getElementById("sexFucks").textContent = testi.company
  document.getElementById("clientTestiText").innerHTML = testi.text
}

// Navigation animations

navAniUlIn = function(id){
  document.getElementById(id).style.width = "100%";
}
navAniUlOut = function(id){
  document.getElementById(id).style.width = "10px";
}
