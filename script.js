function showaboutme() {
    var input = document.getElementById("aboutmeinput").value;
    console.log("Input value:", input);
    var aboutMeText = document.getElementById("aboutmetext");
    console.log("aboutMeText element:", aboutMeText);

    if (aboutMeText) { // Check if aboutMeText is found
        if (input === "show") {
            aboutMeText.style.display = "block"; 
        } else {
            aboutMeText.innerText = "Wrong!";
            aboutMeText.style.display = "block";
        }
    } else {
        console.error("Element with ID 'aboutmetext' not found.");
    }
}
