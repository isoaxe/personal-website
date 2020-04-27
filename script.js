//navElements returns an array nav anchor tags.
navElements = document.getElementById("navbar").getElementsByTagName("*");

// Expand or contract the dropdown navbar on small screens.
function toggleExpand() {
  let navbar = document.getElementById("navbar");
  if (navbar.className === "topnav") {
    navbar.className += " expand";
  } else {
    navbar.className = "topnav";
  }
}

// Helper: Highlights the navbar element based on supplied argument.
function highlightNavElement(element) {
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
function clearNavHighlights() {
  for (i = 0; i < (navElements.length - 2); i++) {
    navElements[i].className = "";
  }
}

// Checks the page position and calls highlightNavElement() based on this.
function checkPagePosition() {
  //Gives a number that turns negative once the top of the element passes the top of the viewport.
  const home = document.getElementById("home").getBoundingClientRect().top;
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
    highlightNavElement("home")
  }
}

window.onscroll = () => {checkPagePosition()};

// Helper: Selects the tile that was clicked in order to modify.
function lastPage(tileId) {
  document.getElementById(tileId).style.animationName = "down-further";
  document.getElementById(tileId).style.animationDuration = "2s";
  document.getElementById(tileId).style.animationFillMode = "forwards";
}

function resetAnimation(tileId) {
  document.getElementById(tileId).style.animationName = "slide-down";
}

// Execute the lastPage() function for that tile when clicking on it.
document.getElementById("0").onclick = () => lastPage(0);
document.getElementsByClassName("tile")[0].onmouseleave = () => resetAnimation(0);
document.getElementById("1").onclick = () => lastPage(1);
document.getElementsByClassName("tile")[1].onmouseleave = () => resetAnimation(1);
document.getElementById("2").onclick = () => lastPage(2);
document.getElementsByClassName("tile")[2].onmouseleave = () => resetAnimation(2);
document.getElementById("3").onclick = () => lastPage(3);
document.getElementsByClassName("tile")[3].onmouseleave = () => resetAnimation(3);
document.getElementById("4").onclick = () => lastPage(4);
document.getElementsByClassName("tile")[4].onmouseleave = () => resetAnimation(4);
