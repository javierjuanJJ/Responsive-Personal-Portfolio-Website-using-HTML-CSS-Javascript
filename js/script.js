// toggle icon navbar



//scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = function () {

    sections.forEach(value => {
        let top = window.screenY;
        let offset = value.offsetTop - 100;
        let height = value.offsetHeight;
        let id = value.getAttribute('id');

        if (top >= offset&& top < offset + height){
            navLinks.forEach(value1 => {
                value1.classList.remove('active');
                document.querySelector('header nav a[href= ' + id + ']').classList.add('active');

            })
        }

    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);
}