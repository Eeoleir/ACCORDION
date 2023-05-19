var acc = document.getElementsByClassName("subject");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    console.log("WORKING");

    var info = this.nextElementSibling;
    if (info.style.display === "block") {
      info.style.display = "none";
    } else {
      info.style.display = "block";
    }
  });
}
