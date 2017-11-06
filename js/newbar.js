// $(document).ready(function () {
   
//     $('div.glyphicon').click(function() {
//         $(this).toggleClass('show');
//     });
// });


var open = document.getElementById('bar_btn'),
    dropContent = document.getElementById('dropContent');

open.addEventListener('click', function(){
    dropContent.classList.toggle("show");
});

// document.addEventListener('click', function(e){
//     if (!e.target.matches('.drop_content')) {
//         dropContent.classList.remove('show');
//       }
// });