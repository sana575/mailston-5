document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    //type assertion
    //Get references to from elements using their IDs
    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const ExperienceElement = document.getElementById(
      "Experience"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
const usernameElement = document.getElementById(
  "username"
)as HTMLInputElement;

    //check if all from elements are present
    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      ExperienceElement &&
      skillsElement &&


usernameElement

    ) {
      // get values from form
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const Experience = ExperienceElement.value;
      const skills = skillsElement.value;
      const username = usernameElement.value;

      const uniquePath = `resume/${username.replace(/\s+/g, '_')}_cv.html`
      //picture elements
      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      //create resume output
      const resumeOutput = `
    <h2>Resume</h2>
    ${
      profilePictureURL
        ? `<img src= ${profilePictureURL} alt="profile Picture" class="profilePicture">`
        : ""
    }
    <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
    <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone} </span> </p>

    <h3>Education</h3>
    <p id="edit-Education" class="editable">Education:${education} </p>

    <h3>Experience</h3>
    <p id="edit-Experience" class="editable">Experience:${Experience} </p>

    <h3>skills</h3>
    <p id="edit-skills" class="editable">skills:${skills}</p>
     `;

const downloadlink = document.createElement("a")
downloadlink.href = "data:text/html;charset=UTF-8,"+encodeURIComponent(resumeOutput)
downloadlink.textContent = "Downlodad your 2024 Resume";

// resume output
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
resumeOutputElement.appendChild(downloadlink)
resumeOutputElement.style.display = "block";
      //  makeEditable();
      }
    } else {
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
