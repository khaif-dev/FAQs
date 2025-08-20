// adding DOM elements
const accordionBtn = document.querySelectorAll(".accordion")

// Adding event listeners
for (i=0; i<accordionBtn.length; i++){
  accordionBtn[i].addEventListener('click', function(){
    this.classList.toggle("active");
    var popup = this.nextElementSibling;
    if (popup.style.display === "block")
{
  popup.style.display = 'none';
}
else {
  popup.style.display = 'block';
}
  })
}
