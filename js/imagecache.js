function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

// preloadImages(["images/cook.jpg",
//                 "images/door.jpg",
//                 "images/eat.jpg",
//                 "images/geisel.jpg",
//                 "images/glass.jpg",
//                 "images/hanzo.gif",
//                 "images/overdrive.jpg",
//                 "images/pops.jpg",
//                 "images/rockies.jpg",
//                 "images/SD.jpg",
//                 "images/sdhacks.jpg",
//                 "images/stanfordlow.jpg",
//                 "images/tentfeet.jpg",
//                 "images/usc.jpg",
//                 "images/vb.jpg",
//                 "images/whoop.gif",
//                 "images/zion.gif"]);
