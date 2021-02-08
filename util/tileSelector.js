function tileSelector(id, slide) {
  switch (id) {
    case 0:
      if (slide == 1) {
        return 'media/logo-TUD.png'
      } else if (slide == 2) {
        return `
        <p><a href="https://tudublin.ie/study/undergraduate/courses/structural-engineering-tu824/" target="_blank">BEng in Structural Engineering</a></p>
        <h5>Technological University Dublin</h5>
        <h5>4 Years</h5>
        <h5>Complete</h5>
        `
      } else {
        return `
        <p>Obtained a second-class honours upper division (2:1) in what was then the Dublin Institute of Technology (DIT).</p>
        `
      }
      break;
    case 1:
      if (slide == 1) {
        return 'media/logo-CC&UC.png'
      } else if (slide == 2) {
        return `
        <h5>Miscellaneous Courses</h5>
        <h5>Udacity / Codecademy</h5>
        <h5>600 Hours</h5>
        <h5>85% Complete</h5>
        `
      } else {
        return `
        <p>Completed various courses covering topics such as HTML, CSS, Python, JavaScript, Bootstrap, Node, React, Express, Mocha & Chai, Git, the command line and networking.</p>
        <p><a href="https://trello.com/b/F92DHTFU/other-programming-education" target="_blank">View Progress on Trello</a></p>
        `
      }
      break;
    case 2:
      if (slide == 1) {
        return 'media/logo-UBC.png'
      } else if (slide == 2) {
        return `
        <p><a href="https://www.edx.org/micromasters/ubcx-software-development" target="_blank">Software Development MicroMasters</a></p>
        <h5>University of British Columbia</h5>
        <h5>500 Hours</h5>
        <h5>35% Complete</h5>
        `
      } else {
        return `
        <p>Completed two of six modules with the University of British Columbia via edX. The languages of instruction are Racket, TypeScript and Java.</p>
        <p>The MicroMasters coursework is a subset of the OSSU degree.</p>
        <p><a href="https://trello.com/b/cSR4Hrz8/ossu-computer-science-curriculum-v8" target="_blank">View Progress on Trello</a></p>
        `
      }
      break;
    case 3:
      if (slide == 1) {
        return 'media/logo-OSSU.png'
      } else if (slide == 2) {
        return `
        <p><a href="https://github.com/ossu/computer-science" target="_blank">OSSU CS Undergraduate</a></p>
        <h5>Various Universities</h5>
        <h5>3,000 Hours</h5>
        <h5>10% Complete</h5>
        `
      } else {
        return `
        <p><p>This is a crowdsourced collaborative effort maintained on GitHub, intended to cover all of the material encountered in a 4-year undergraduate degree.</p>
        <p>Core material covers programming, maths, systems, theory and applications.</p>
        <p><a href="https://trello.com/b/cSR4Hrz8/ossu-computer-science-curriculum-v8" target="_blank">View Progress on Trello</a></p>
        `
      }
      break;
    case 4:
      if (slide == 1) {
        return 'media/logo-GT.png'
      } else if (slide == 2) {
        return `
        <p><a href="http://www.omscs.gatech.edu/" target="_blank">MSc in Computer Science</a></p>
        <h5>Georgia Tech</h5>
        <h5>2 Years</h5>
        <h5>Planned</h5>
        `
      } else {
        return `
        <p>Plans to commence this masters of science in computer science from Georgia Tech on completion of the requisite sections in the OSSU undergraduate.</p>
        `
      }
      break;
    case 5:
      if (slide == 1) {
        return 'media/generic-web-app.png'
      } else if (slide == 2) {
        return `
        <h5>Condo Management App</h5>
        <h5>Front end was built with React / Redux while the back end was done using Firebase</h5>
        <p>Test out the <a href="/condo" target="_blank">app</a></p>
        `
      } else {
        return `
        <p>This app allows condo management companies to track and assign tasks that need to be completed for residents. For example, watering of plants and feeding of pets can be scheduled for when residents are gone on holidays.</p>
        <p>Find out more on the <a href="https://github.com/Isoaxe/space-invaders" target="_blank">GitHub</a> readme.</p>
        `
      }
      break;
    case 6:
      if (slide == 1) {
        return 'media/jammming.png'
      } else if (slide == 2) {
        return `
        <h5>Jammming</h5>
        <h5>Music searching app programmed with React and using the Spotify API</h5>
        <p>Give the <a href="/jammming" target="_blank">app</a> a go</p>
        `
      } else {
        return `
        <p>This app allows the user to search for music using the Spotify API. Songs can be added or removed from a playlist and then saved to the users Spotify account, amongst other functions.</p>
        <p>See the <a href="https://github.com/Isoaxe/jammming" target="_blank">GitHub</a> readme for more detail.</p>
        `
      }
      break;
    case 7:
      if (slide == 1) {
        return 'media/ravenous.png'
      } else if (slide == 2) {
        return `
        <h5>Ravenous</h5>
        <h5>Restaurant finding app built with React and interacting with the Yelp API</h5>
        <p>Try out the <a href="/ravenous" target="_blank">app</a></p>
        `
      } else {
        return `
        <p>Ravenous allows the user to find restaurants based on a search term, price and location. Results can be sorted based on best match, highest rated and most reviewed.</p>
        <p>See the <a href="https://github.com/Isoaxe/ravenous" target="_blank">GitHub</a> readme for more detail.</p>
        `
      }
      break;
  }
}

module.exports = tileSelector;
