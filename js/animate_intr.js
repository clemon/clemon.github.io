var interests = ["snow", "hike", "volley", "games", "cook", "eat"];
var intrCont = new IntrController(interests);

function IntrController(interests) {
    this.interests = interests;
    this.state = 0;
}

IntrController.prototype.intrClick = function(clicked) {
    if (clicked == this.state) { return; }

    for (var x=0; x<this.interests.length; x++) {
        if (x == clicked) {
            document.getElementById("like_"+this.interests[x]).style.visibility = "visible";
            document.getElementById("intr_panel").className = "centric panel "+this.interests[x];
        }
        else {
            document.getElementById("like_"+this.interests[x]).style.visibility = "hidden";
        }
    }
    this.state = clicked;
};
