module.exports = function tileSelector(id, slide) {
  switch (id) {
    case 0:
      if (slide == 1) {
        return 'media/logo-TUD.png'
      } else if (slide == 2) {
        return `<p><a href="https://tudublin.ie/study/undergraduate/courses/structural-engineering-tu824/" target="_blank">BEng in Structural Engineering</a></p>
        <h5>Technological University Dublin</h5>
        <h5>4 Years</h5>
        <h5>Complete</h5>`
      } else {
        return `<p>Obtained a second-class honours upper division (2:1) in what was then the Dublin Institute of Technology (DIT).</p>`
      }
      break;
  }
}
