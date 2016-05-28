// global controller init in index.html

var state = 0;
var ids = ["#bmlogo", "#mslogo", "#antlogo"];
var classes = ["briefme", "microsoft", "antengo"];
var text = ['Worked on the Google App Engine backend (python) for "BriefMe View", a feature that scrapes media from articles as an alternative to the mobile web. Also did data analytics and automation of source RSS feed maintenance.',
            'Worked on the OneDrive team as a full-stack web developer. Did API work in the backend as well as UI and JavaScript work in the frontend for a new feature.',
            'Worked on a cross-platform mobile application for real-time classifieds. Developed for Windows Phone, Tested and Fixed bugs on Android'];
var dates = ["June 2015 - Sept 2015", "June 2014 - Sept 2014", "Sept 2013 - April 2014"];
var skills = [["Python&nbsp;&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;&nbsp;CSS", "Google App Engine"],
                ["C#&nbsp;&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;&nbsp;CSS", "JavaScript"],
                ["C#&nbsp;&nbsp;&nbsp;&nbsp;Windows Phone", "Java&nbsp;&nbsp;&nbsp;&nbsp;Android"]];

function logo_click(clicked) {
    if (state == clicked) { return; }

    TweenMax.to(ids[clicked], .5, {width:"90px", opacity:"1"});

    for (var x=0; x<ids.length; x++) {
        if (x != clicked)
            shrink(ids[x]);
    }

    state = clicked;
    toPage(clicked);
};

function toPage(clicked) {
    var new_class = "navbar panel "+classes[clicked];
    TweenMax.to("#exp_panel", .5, {className: new_class});
    document.getElementById("exp_img").src = "images/" + classes[clicked] + "_titleimg.png";
    document.getElementById("exp_date").innerHTML = dates[clicked];
    document.getElementById("exp_text").innerHTML = text[clicked];
    document.getElementById("exp_skill1").innerHTML = skills[clicked][0];
    document.getElementById("exp_skill2").innerHTML = skills[clicked][1];
}

function shrink(id) {
    console.log("shrinking "+id);
    TweenMax.to(id, .5, {width:"45px", opacity:".5"});
};
