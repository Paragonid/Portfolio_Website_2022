const sections = document.querySelectorAll(".section");
const controlWrapper = document.querySelectorAll(".controls");
const controlBtns = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

let PageTransition = () => {
  controlBtns.forEach((c: Element) => {
        c.addEventListener('click', (e: Event) => {
            const currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            const clickedBtn = <Element>e.target;
            clickedBtn.className += ' active-btn'
        })
  });

    allSections.forEach((c: Element) => {
        c.addEventListener('click', (e: any) => {
            const id = e.target.dataset.id
            if (id) {
                controlBtns.forEach((c: Element) => {
                    c.classList.remove('active');
                })
                const clickedBtn = <Element>e.target;
                clickedBtn.classList.add('active');

                sections.forEach((section: Element) => {
                    section.classList.remove('active');
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
    })
};
PageTransition();

