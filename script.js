let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reaveal('.hero-text',{delay:200, origin:'top'});
sr.reaveal('.hero-img',{delay:450, origin:'top'});
sr.reaveal('.icons',{delay:500, origin:'left'});
sr.reaveal('.scroll-down',{delay:500, origin:'right'});