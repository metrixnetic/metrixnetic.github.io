//lava lamp
var tl = new TimelineMax();

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var i = 0; i < 5; i++) {
    var t = TweenMax.to(document.querySelector('#blob' + i), randomBetween(14, 50), {
        y: 260,
        repeat: -1,
        repeatDelay: randomBetween(1, 3),
        yoyo: true,
        ease: Linear.easeNone
    });

    tl.add(t, (i + 1) / 0.6);
}

tl.seek(120);
tl.timeScale(2);
//particles

//------------------------------------------------------------------------------------
// Code by Ilya Kryvorotenko

var t;
// if when user click on support or store window dont was an top - scrolling up
function up() {

	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);

	if (top > 0) {
		jQuery('body,html').animate({scrollTop: 0}, 500);
	} else {
		clearTimeout(t);
	}

	return false;
}