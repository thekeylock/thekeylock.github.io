function showaboutme() {
    var input = document.getElementById("aboutmeinput").value;
    if(input == "show")
    {
       document.getElementById("aboutmetext").style.display = "block"; 
    }
    else{
        document.getElementById("aboutmetext").innerText = "Wrong!"
        document.getElementById("aboutmetext").style.display = block;
    }
}