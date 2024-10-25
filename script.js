function showaboutme() {
    var input = document.getElementById("aboutmeinput").value;
    var aboutMeText = document.getElementById("aboutmetext");

    if (input === "show") {
        aboutMeText.style.display = "block"; 
    } else {
        aboutMeText.innerText = "Wrong!";
        aboutMeText.style.display = "block";
    }
}
