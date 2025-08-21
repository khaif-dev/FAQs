const btns = document.querySelectorAll(".accordion");

btns.forEach(button => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling; // paragraph element

    if (this.classList.contains("active")) {
      // content already open, close it
      this.classList.remove("active");
      content.style.display = "none";
    } else {
      // open one content at a time 
      btns.forEach(btn => {
        btn.classList.remove("active");
        btn.nextElementSibling.style.display = "none";
      });
      this.classList.add("active");
      content.style.display = "block";
    }
  });
});
