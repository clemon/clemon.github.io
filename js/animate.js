var controller = new ScrollMagic.Controller({container: "#scrollContainer"});      // init controller

// var tween = TweenMax.to("#titlePeriod", .5, {x:-362, y:-50});
//
// new ScrollMagic.Scene({
//     duration: 100,
//     offset: 20
// })
// .setTween(tween)
// .addTo(controller)
// .addIndicators({name: "tween"});

new ScrollMagic.Scene({
    duration: 4000,
    offset: 220
})
.setPin("#titleDiv", {pushFollowers:false})
.addTo(controller)
.addIndicators({name: "title pin"});
