const section = document.querySelectorAll(".section");
const controlWrapper = document.querySelectorAll(".controls");
const controlBtns = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

let PageTransition = () => {
  controlBtns.forEach((c: Element) => {
        c.addEventListener('click', (e: Event) => {
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            let clickedBtn = <Element>e.target;
            clickedBtn.className += ' active-btn'
        })
  });
};
PageTransition();