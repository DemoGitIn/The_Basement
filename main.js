let personName = "";

function complainMessage() {
    alert("I told you not to do that " + personName + "!! ");
}

function typeAndScream() {
    document.getElementById("audio").play();
    personName = document.getElementById("name").value;
}

function goDark() {
    let body = document.getElementsByTagName("body")[0];
    if (body.className == "") {
        body.className = "dark";
    }
    else {
        body.className = "";
    }
}

function finishTheStory() {
    document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

document.getElementById("mood").addEventListener('click', goDark)
document.getElementById("please").addEventListener('click', complainMessage)
document.getElementById("name").addEventListener('input', typeAndScream)
document.getElementById("tellMe").addEventListener('click', finishTheStory)


