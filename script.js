// get nav bar , anchor tags
// iterate and first on clicking , fetch using event listener and disable it's default property
//link the text to section id (you want to go when clicked)
//setInterval and add scrollBy property at at an interval window.scrollBy(0,50),50
// stay happy home boy , remember that we need to iss taraf 


var menuItems = document.querySelectorAll('.menu a');
var interval;

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function(event) {
    event.preventDefault();
    var sectionId = this.textContent.trim().toLowerCase();
    var sectionElement = document.getElementById(sectionId);
    
    interval = setInterval(function() {
      scroll(sectionElement);
    }, 20);
  });
}

function scroll(sectionElement) {
  var coordinates = sectionElement.getBoundingClientRect();
  
  if (coordinates.top <=0) {
    clearInterval(interval);
    return;
  }
  
  window.scrollBy(0, 50);
}





var progressBars = document.querySelectorAll('.skill-progress>div');
var skillsContainer = document.getElementById('skills-container');

window.addEventListener('scroll', checkScroll);

var animationDone = false;

function intialiseBars() {
    for (let bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

intialiseBars();

function fillBars() {
    for (let bar of progressBars) {
        let targetWidth = bar.getAttribute('data-bar-width');

        let currentWidth = 0;
        let interval = setInterval(function() {
            if (currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}

function checkScroll() {
    // you have to check whether the skills container is visible
    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top < window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        intialiseBars();
    }
}
var progressBars = document.querySelectorAll('.skill-progress>div');
var skillsContainer = document.getElementById('skills-container');

window.addEventListener('scroll', checkScroll);

var animationDone = false;

function intialiseBars() {
    for (let bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

intialiseBars();

function fillBars() {
    for (let bar of progressBars) {
        let targetWidth = bar.getAttribute('data-bar-width');

        let currentWidth = 0;
        let interval = setInterval(function() {
            if (currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 8);
    }
}

function checkScroll() {
    // you have to check whether the skills container is visible
    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top < window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        intialiseBars();
    }
}
