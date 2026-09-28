let clicked = 0;
let clicked2 = 0;
let clicked3 = 0;
let clicked4 = 0;

function displayPhrase()
{
    if (clicked == 0){
        clicked = 1;
    } else {
        clicked = 0;
    }
    if (clicked == 1) {
        document.getElementById("item").innerHTML = '<h1>Go back</h1>';
        document.getElementById("item").classList.add("move");
        document.getElementById("item2").classList.add("die");
        document.getElementById("item3").classList.add("die");
        document.getElementById("item4").classList.add("die");
        document.getElementById("main").classList.add("maindie");
        document.getElementById("aboutme").classList.remove("die");
        document.getElementById("aboutme").classList.add("alive");
    } else {
        document.getElementById("item").innerHTML = '<h1>About Me</h1>';
        document.getElementById("item").classList.remove("move");
        document.getElementById("item2").classList.remove("die");
        document.getElementById("item3").classList.remove("die");
        document.getElementById("item4").classList.remove("die");
        document.getElementById("main").classList.remove("maindie");
        document.getElementById("aboutme").classList.add("die");
        document.getElementById("aboutme").classList.remove("alive");
    }
}
function displayPhrase2()
{
    if (clicked2 == 0){
        clicked2 = 1;
    } else {
        clicked2 = 0;
    }
    if (clicked2 == 1) {
        document.getElementById("item2").innerHTML = '<h1>Go back</h1>';
        document.getElementById("item2").classList.add("move");
        document.getElementById("item").classList.add("die");
        document.getElementById("item3").classList.add("die");
        document.getElementById("item4").classList.add("die");
        document.getElementById("main").classList.add("maindie");
        document.getElementById("projects").classList.remove("die");
        document.getElementById("projects").classList.add("alive");
    } else {
        document.getElementById("item2").innerHTML = '<h1>Projects</h1>';
        document.getElementById("item2").classList.remove("move");
        document.getElementById("item").classList.remove("die");
        document.getElementById("item3").classList.remove("die");
        document.getElementById("item4").classList.remove("die");
        document.getElementById("main").classList.remove("maindie");
        document.getElementById("projects").classList.add("die");
        document.getElementById("projects").classList.remove("alive");
    }
}
function displayPhrase3()
{
    if (clicked3 == 0){
        clicked3 = 1;
    } else {
        clicked3 = 0;
    }
    if (clicked3 == 1) {
        document.getElementById("item3").innerHTML = '<h1>Go back</h1>';
        document.getElementById("item3").classList.add("move");
        document.getElementById("item").classList.add("die");
        document.getElementById("item2").classList.add("die");
        document.getElementById("item4").classList.add("die");
        document.getElementById("main").classList.add("maindie");
        document.getElementById("hobbies").classList.remove("die");
        document.getElementById("hobbies").classList.add("alive");
    } else {
        document.getElementById("item3").innerHTML = '<h1>Hobbies</h1>';
        document.getElementById("item3").classList.remove("move");
        document.getElementById("item").classList.remove("die");
        document.getElementById("item2").classList.remove("die");
        document.getElementById("item4").classList.remove("die");
        document.getElementById("main").classList.remove("maindie");
        document.getElementById("hobbies").classList.add("die");
        document.getElementById("hobbies").classList.remove("alive");
    }
}
function displayPhrase4()
{
    if (clicked4 == 0){
        clicked4 = 1;
    } else {
        clicked4 = 0;
    }
    if (clicked4 == 1) {
        document.getElementById("item4").innerHTML = '<h1>Go back</h1>';
        document.getElementById("item4").classList.add("move");
        document.getElementById("item").classList.add("die");
        document.getElementById("item2").classList.add("die");
        document.getElementById("item3").classList.add("die");
        document.getElementById("main").classList.add("maindie");
        document.getElementById("games").classList.remove("die");
        document.getElementById("games").classList.add("alive");
    } else {
        document.getElementById("item4").innerHTML = '<h1>My Game Recs</h1>';
        document.getElementById("item4").classList.remove("move");
        document.getElementById("item").classList.remove("die");
        document.getElementById("item2").classList.remove("die");
        document.getElementById("item3").classList.remove("die");
        document.getElementById("main").classList.remove("maindie");
        document.getElementById("games").classList.add("die");
        document.getElementById("games").classList.remove("alive");
    }
}
