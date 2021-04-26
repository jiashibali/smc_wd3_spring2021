$('.f1_container').click(function() {
    $(this).toggleClass('active');
});


function changeImg() {
    var image = document.getElementById('logo');
    if (image.src.match("img/kdawhite.png")) {
        image.src = "img/kdaglow.png";
    }
    else {
        image.src = "img/kdawhite.png";
    }
}
