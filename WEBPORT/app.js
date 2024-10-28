var point = getCookie("0");
var pic = 1;

$(document).keyup(function(event) {
    pop();
});

function pop() {
    play_pop();
    point = Number(point) + 1;
    setCookie("0", point);
    changePic();
    document.getElementById("point").innerHTML = point;
}

function changePic() {
    document.getElementById("point").innerHTML = point;
    
    if (pic === 0) {
        pic = 1;
     
        document.getElementById("MOO").src = "image/New Project.png";
        
        setTimeout(function() {
            changePic(); 
        }, 500); 
    } else {
        pic = 0;
       
        document.getElementById("MOO").src = "image/New Project (1).png";
    }
}

function play_pop() {
    document.getElementById("music").pause();
    document.getElementById("music").play();
}

function setCookie(cpoint, cvalue) {
    document.cookie = cpoint + "=" + cvalue;
}

function getCookie(cpoint) {
    let pname = cpoint + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(pname) === 0) {
            return c.substring(pname.length, c.length);
        }
    }
    return "0";
}
