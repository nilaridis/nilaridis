function startWeb(){
    var about = document.getElementById("about");
    var myProjects = document.getElementById("myProjects");
    about.style.display= "none";
    myProjects.style.display="none";
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


    function toggleProj () {
        var welcome= document.getElementById("welcome");
        var myProjects = document.getElementById("my-projects");
    
        if(welcome.style.display === "none"){
            welcome.style.display = "block";
        }else{
            welcome.style.display= "none";
        }
    }
  
}