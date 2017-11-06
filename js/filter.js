$(document).ready(function () {
   
    $('span.filter_item').click(function() {
        $(this).toggleClass('filter_choose');
    });
});

$("#element").popover({
    trigger: "manual",
    html: true,
    content: $('#regionPopContent').html()
})
    .on("mouseenter", function () {
    var _this = this;
    $(this).popover("show");
    $(".popover").on("mouseleave", function () {
        $(_this).popover('hide');
    });
}).on("mouseleave", function () {
    var _this = this;
    setTimeout(function () {
        if (!$(".popover:hover").length) {
            $(_this).popover("hide")
        }
    }, 100);
});



  
    
