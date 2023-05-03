// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = function () {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


//scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = function () {

    sections.forEach(value => {
        let top = window.screenY;
        let offset = value.offsetTop - 100;
        let height = value.offsetHeight;
        let id = value.getAttribute('id');
        console.log(id);

        if (top >= offset && top < offset + height){
            navLinks.forEach(value1 => {
                value1.classList.remove('active');
                document.querySelector('header nav a[href=' + id + ']').classList.add('active');

            });
            // Active sections for animation on scroll
            value.classList.add('show-animate');
        }
        else {
            value.classList.remove('show-animate');
        }

    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}