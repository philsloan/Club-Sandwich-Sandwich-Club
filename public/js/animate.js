const headerTitle = document.getElementById('header-title');

gsap.from(headerTitle, {
    duration: 1.5,
     x: -500,
    opacity: 0,
    ease: 'power2.out',
    skewX: 60,
    delay: 0.5,

});