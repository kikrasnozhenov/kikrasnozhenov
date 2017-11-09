var hidden = document.getElementsByClassName("hide")[0];
var el = document.getElementsByClassName("persons_contacts_details");

function toggle() {
  if (hidden.style.display === "none") {
    hidden.style.display = "block";
  } else {
    hidden.style.display = "none";
  }
}

for (var i = 0; i < el.length; i++) {
    el[i].addEventListener("click", toggle, false);
}