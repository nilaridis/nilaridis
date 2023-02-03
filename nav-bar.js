    const about = document.querySelector(".about")
    const myProjects = document.querySelector(".myProject")
    const skills = document.querySelector(".skills")
    const services = document.querySelector(".services")
    const contactMe = document.querySelector(".contact-me")
    const logo = document.querySelector(".logo")

    var welcome1 = document.getElementById("welcome");
    var about1 = document.getElementById("about");
    var myProjects1 = document.getElementById("myProject");
    var skills1 = document.getElementById("skills");
    var services1 = document.getElementById("services");
    var contactMe1 = document.getElementById("contact-me");
        
        about.addEventListener("click" ,e => {
            about1.style.display = "block"
            welcome1.style.display = "none"
            myProjects1.style.display = "none"
            skills1.style.display = "none"
            services1.style.display = "none"
            contactMe1.style.display = "none"
        })
    
        myProjects.addEventListener("click" ,e => {
            about1.style.display = "none"
            welcome1.style.display = "none"
            myProjects1.style.display = "block"
            skills1.style.display = "none"
            services1.style.display = "none"
            contactMe1.style.display = "none"
        })
    
        skills.addEventListener("click" ,e => {
            about1.style.display = "none"
            welcome1.style.display = "none"
            myProjects1.style.display = "none"
            skills1.style.display = "block"
            services1.style.display = "none"
            contactMe1.style.display = "none"
        })
    
        services.addEventListener("click" ,e => {
            about1.style.display = "none"
            welcome1.style.display = "none"
            myProjects1.style.display = "none"
            skills1.style.display = "none"
            services1.style.display = "block"
            contactMe1.style.display = "none"
        })
    
        contactMe.addEventListener("click" ,e => {
            about1.style.display = "none"
            welcome1.style.display = "none"
            myProjects1.style.display = "none"
            skills1.style.display = "none"
            services1.style.display = "none"
            contactMe1.style.display = "block"
        })

        logo.addEventListener("click" ,e => {
            about1.style.display = "none"
            welcome1.style.display = "block"
            myProjects1.style.display = "none"
            skills1.style.display = "none"
            services1.style.display = "none"
            contactMe1.style.display = "none"
        })

