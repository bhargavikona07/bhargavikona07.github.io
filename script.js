document.addEventListener("DOMContentLoaded", function () {

    console.log("Bhargavi Portfolio Loaded Successfully");

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease";
    });


    function showSections() {

        sections.forEach(section => {

            const position = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;


            if(position < screenHeight - 100) {

                section.style.opacity = "1";
                section.style.transform = "translateY(0)";

            }

        });

    }


    window.addEventListener("scroll", showSections);

    showSections();

});
