(() => {

  // VARIABLES
  const courseInfo = document.querySelector('.profPanelText').querySelectorAll('p');
  const imgProf = document.querySelector('#profes');


  // FUNCTION

  // add content to paragraphs with Javascript
  function setCourseInfo(data) {
    courseInfo[0].textContent = data.coursename;
    courseInfo[0].innerHTML += ` - <span class="test-primary">${data.coursecode}</span>`;

    courseInfo[1].textContent = `Professor: ${data.profname}`;

    data.classtime.forEach(time => {
      let newTime = `<li><span class="fa fa-clock-o">${time}</span></li>`;
      courseInfo[1].parentElement.querySelector('ul').innerHTML += newTime;
    });

    imgProf.src = `images/${data.profimg}`;
  }

  // EVENTS
  setCourseInfo(classData);


})();