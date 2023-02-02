function startWeb(){
    var about = document.getElementById("about");
    about.style.display="none"
}

function toggleAbout(){
    var welcome= document.getElementById("welcome");
    var about = document.getElementById("about");

    if (welcome.style.display === "none") {
        welcome.style.display = "block";
    }
    else{
        welcome.style.display = "none";
    }

    if(about.style.display === "none"){
        about.style.display = "block";
    }
    else{
        about.style.display = "none";
    }

    // if(x.style.display === "none"){
    //     x.style.display= "block";

    // }
    // else{
    //     x.style.displat= "none";
    // }
}