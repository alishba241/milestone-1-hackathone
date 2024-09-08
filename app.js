"use strict";
// ! toggle skills section
function toggleSkills() {
    const skillsSection = document.getElementById("skills-section");
    const toggleButton = document.getElementById("toggle-skills-btn");
    //! conditions to toggle skills section
    if (skillsSection && toggleButton) {
        if (skillsSection.style.display === "none" ||
            skillsSection.style.display === "") {
            skillsSection.style.display = "block"; //! Show section
            toggleButton.textContent = "Hide Skills"; //! Change button text
        }
        else {
            skillsSection.style.display = "none"; //! Hide section
            toggleButton.textContent = "Show Skills"; //! Change button text
        }
    }
}
//? THE END
