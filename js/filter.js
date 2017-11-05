// var x = document.getElementsByClassName("filter_item");

function target() { 
     var el = document.getElementsByClassName("filter_item"); 
     el.addEventListener("click", function(el){ 
         [].forEach.call(x, function( el ) {
         el.className = "filter_target";
        });
    });
}
