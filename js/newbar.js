var btn = document.querySelectorAll(".persons_contacts_details");
var el = document.querySelectorAll(".hide");

Array.prototype.forEach.call(btn, function(element, index){

    element.addEventListener("click", toggleViewFunc.bind(element, index), false);
});

function toggleViewFunc(index){

    el[index].classList.toggle("show");
}
