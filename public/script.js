// navElements returns an array nav anchor tags.
const navElements = document.getElementById("navbar").getElementsByTagName("*");

// Expand or contract the dropdown navbar on small screens.
// This function is called from index.html and thus is not used in this file.
/* eslint-disable-next-line */
function toggleExpand () {
  const navbar = document.getElementById("navbar");
  if (navbar.className === "topnav") {
    navbar.className += " expand";
  } else {
    navbar.className = "topnav";
  }
}

// Helper: Highlights the navbar element based on supplied argument.
function highlightNavElement (element) {
  switch (element) {
    case "home":
      clearNavHighlights();
      navElements[0].className = "active";
      break;
    case "education":
      clearNavHighlights();
      navElements[1].className = "active";
      break;
    case "tech":
      clearNavHighlights();
      navElements[2].className = "active";
      break;
    case "projects":
      clearNavHighlights();
      navElements[3].className = "active";
      break;
    case "contact":
      clearNavHighlights();
      navElements[4].className = "active";
      break;
  }
}

// Helper: Clears all navbar elements of highlighting.
function clearNavHighlights () {
  for (let i = 0; i < (navElements.length - 2); i++) {
    navElements[i].className = "";
  }
}

// Checks the page position and calls highlightNavElement() based on this.
function checkPagePosition () {
  // Gives a number that turns negative once the top of the element passes the top of the viewport.
  const education = document.getElementById("education").getBoundingClientRect().top;
  const tech = document.getElementById("tech").getBoundingClientRect().top;
  const projects = document.getElementById("projects").getBoundingClientRect().top;
  const contact = document.getElementById("contact").getBoundingClientRect().top;
  if (contact < 1) {
    highlightNavElement("contact");
  } else if (projects < 1) {
    highlightNavElement("projects");
  } else if (tech < 1) {
    highlightNavElement("tech");
  } else if (education < 1) {
    highlightNavElement("education");
  } else {
    highlightNavElement("home");
  }
}

window.onscroll = () => { checkPagePosition(); };

// Contact form validation of user input.
// This function is called from index.html and thus is not used in this file.
/* eslint-disable-next-line */
function validateForm () {
  const name = document.forms.contact.name.value;
  const email = document.forms.contact.email.value;
  const message = document.forms.contact.message.value;
  const checkbox1 = document.forms.contact.checkbox1.checked;
  const checkbox2 = document.forms.contact.checkbox2.checked;

  // Check each field for valid input.
  if (name === "") {
    document.getElementById("name").style.outline = "medium solid red";
    document.getElementById("name").placeholder = "Please enter your name here";
  }
  if (email.indexOf("@") === -1) {
    document.getElementById("email").style.outline = "medium solid red";
    document.getElementById("email").value = "";
    document.getElementById("email").placeholder = "Valid emails must contain an '@' symbol";
  }
  if (email === "") {
    document.getElementById("email").placeholder = "Please enter your email address here";
  }
  if (message === "") {
    document.getElementById("message").style.outline = "medium solid red";
    document.getElementById("message").placeholder = "Please enter your message here";
  }
  if ((checkbox1 && !checkbox2) === false) {
    document.getElementById("checkbox-label").style.color = "red";
  }

  // Remove red box around fields where valid input has been entered on next submission.
  if (name !== "") {
    document.getElementById("name").style.outline = 0;
  }
  if (email.indexOf("@") !== -1) {
    document.getElementById("email").style.outline = 0;
  }
  if (message !== "") {
    document.getElementById("message").style.outline = 0;
  }
  if (checkbox1 && !checkbox2) {
    document.getElementById("checkbox-label").style.color = "white";
  }

  // If all fields pass, then return true so message can be sent.
  if (name !== "" && email.indexOf("@") !== -1 && message !== "" && (checkbox1 && !checkbox2)) {
    alert("Message sent! \n\nYou have also been sent a copy. \nCheck your junk mail folder if not found.");
    return true;
  }
  return false;
}
