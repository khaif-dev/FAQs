// Adding DOM elements
btns = document.querySelectorAll(".accordion")

// Adding event listeners
btns.forEach(button => {
  button.addEventListener('click', function(){

    var content = this.nextElementSibling //paragraph element
    btns.forEach(btn => {
      btn.classList.remove("active");
      btn.nextElementSibling.style.display = 'none';
    });

    if(content.style.display === 'block'){
      content.style.display = 'none';
      this.classList.remove("active");
    }
    else{
      content.style.display = 'block'
      this.classList.add("active");
    }
  })  
});

