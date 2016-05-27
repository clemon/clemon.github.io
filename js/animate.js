// init controller
var controller = new ScrollMagic.Controller({container: "#scrollContainer"});

// pin title
new ScrollMagic.Scene({
    duration: 4000,
    offset: 250
})
.setPin("#titleDiv", {pushFollowers:false})
.addTo(controller)
.addIndicators()
.on("update", function(event){
    console.log("pos: "+event.scrollPos);
});

// fade intro text
var intro_fade = TweenMax.to("#introText", 1, {opacity:0})
new ScrollMagic.Scene({
    duration: 200,
    offset: 265
})
.setTween(intro_fade)
.addTo(controller);

// period translation
var period_tween = TweenMax.to("#titlePeriod", 1, {x:-180, y:-30, rotation:360});
new ScrollMagic.Scene({
    duration: 270,
    offset: 538
})
.setTween(period_tween)
.addTo(controller);

// t fade to hidden
var t_fade = TweenMax.to("#titleT", 1, {opacity:0, fontSize:50});
new ScrollMagic.Scene({
    duration: 100,
    offset: 542
})
.setTween(t_fade)
.addTo(controller);

// e fade to hidden
var e_fade = TweenMax.to("#titleE", 1, {opacity:0, fontSize:50});
new ScrollMagic.Scene({
    duration: 100,
    offset: 583
})
.setTween(e_fade)
.addTo(controller);

// h fade to hidden
var h_fade = TweenMax.to("#titleH", 1, {opacity:0, fontSize:50});
new ScrollMagic.Scene({
    duration: 100,
    offset: 636
})
.setTween(h_fade)
.addTo(controller);

// shrink c, end in logo
var c_shrink = TweenMax.to("#titleC", 1, {fontSize:"80pt"});
new ScrollMagic.Scene({
    duration: 50,
    offset: 757
})
.setTween(c_shrink)
.addTo(controller);
