console.log(" JS is loading ")

var acc = document.getElementsByClassName("accordion-tab");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.height === "auto") {
        panel.style.padding = "16px";
        panel.style.paddingRight = "64px";
        panel.style.display = "block";
      panel.style.height = "0";
      panel.style.padding = "0";
      panel.style.display = "none";
    } else {
      panel.style.height = "auto";
      panel.style.padding = "16px";
      panel.style.paddingRight = "64px";
      panel.style.display = "block";
    }
  });
}