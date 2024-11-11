var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    //Get references to from elements using their IDs
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var ExperienceElement = document.getElementById("Experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    //check if all from elements are present
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        ExperienceElement &&
        skillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var Experience = ExperienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL
            ? "<img src= ".concat(profilePictureURL, " alt=\"profile Picture\" class=\"profilePicture\">")
            : "", "\n    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, " </span> </p>\n\n    <h3>Education</h3>\n    <p id=\"edit-Education\" class=\"editable\">Education:").concat(education, " </p>\n\n    <h3>Experience</h3>\n    <p id=\"edit-Experience\" class=\"editable\">Experience:").concat(Experience, " </p>\n\n    <h3>skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">skills:").concat(skills, "</p>\n     ");
        var downloadlink = document.createElement("a");
        downloadlink.href = "data:text/html;charset=UTF-8," + encodeURIComponent(resumeOutput);
        downloadlink.textContent = "Downlodad your 2024 Resume";
        // resume output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadlink);
            resumeOutputElement.style.display = "block";
            //  makeEditable();
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
// function makeEditable() {
//   const editableElements = document.querySelectorAll(".editable");
//   editableElements.forEach((element) => {
//     element.addEventListener("click", function () {
//       const currentElement = element as HTMLElement;
//       const currentvalue = currentElement.textContent || "";
//       //replace content
//       if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
//         const input = document.createElement("input");
//         input.type = "text";
//         input.value = currentvalue;
//         input.classList.add("editing-input");
//         input.addEventListener("blur", function () {
//           currentElement.textContent = input.value;
//           currentElement.style.display = "inline";
//           input.remove();
//         });
//         currentElement.style.display = "none";
//         currentElement.parentNode?.insertBefore(input, currentElement);
//         input.focus();
//       }
//     });
//   });
// }
