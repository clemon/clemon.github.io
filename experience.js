function drawline(canvasid)
{
    var canvas = document.getElementById(canvasid);
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(canvas.width/2, 0);
    context.lineTo(canvas.width/2, canvas.height);
    context.lineWidth = 2;
    context.strokeStyle = 'LightGray';
    context.stroke();
}

var aboutme_rotateCount = 0;
function aboutMeRotate() {
    document.querySelector('#aboutcollapse').toggle();
    // try add css class thing for animate
    if(aboutme_rotateCount % 2 === 1)
        document.getElementById('aboutfab').className ='rotateclass';
    else
        document.getElementById('aboutfab').className ='reverseRotateclass';
    aboutme_rotateCount++;
}

var education_rotateCount = 0;
function educationRotate() {
    document.querySelector('#educollapse').toggle();
    // try add css class thing for animate
    if(education_rotateCount % 2 === 0)
        document.getElementById('edufab').className ='rotateclass';
    else
        document.getElementById('edufab').className ='reverseRotateclass';
    education_rotateCount++;
}

var experience_rotateCount = 0;
function experienceRotate() {
    document.querySelector('#expcollapse').toggle();
    // try add css class thing for animate
    if(experience_rotateCount % 2 === 0)
        document.getElementById('expfab').className ='rotateclass';
    else
        document.getElementById('expfab').className ='reverseRotateclass';
    experience_rotateCount++;
}

var projects_rotateCount = 0;
function projectsRotate() {
    document.querySelector('#projcollapse').toggle();
    // try add css class thing for animate
    if(projects_rotateCount % 2 === 0)
        document.getElementById('projfab').className ='rotateclass';
    else
        document.getElementById('projfab').className ='reverseRotateclass';
    projects_rotateCount++;
}

var interests_rotateCount = 0;
function interestsRotate() {
    document.querySelector('#intcollapse').toggle();
    // try add css class thing for animate
    if(interests_rotateCount % 2 === 0)
        document.getElementById('intfab').className ='rotateclass';
    else
        document.getElementById('intfab').className ='reverseRotateclass';
    interests_rotateCount++;
}

var contact_rotateCount = 0;
function contactRotate() {
    document.querySelector('#contactcollapse').toggle();
    // try add css class thing for animate
    if(contact_rotateCount % 2 === 0)
        document.getElementById('contactfab').className ='rotateclass';
    else
        document.getElementById('contactfab').className ='reverseRotateclass';
    contact_rotateCount++;
}