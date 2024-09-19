gsapSoloAnimations();

// GSAP:
function gsapSoloAnimations() {

    // Hero animación:
    var tl = gsap.timeline();

    tl.from(".categoria_articulo", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        delay: 1,
        ease: "power1.out"
    })
    .from("h1", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("p", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("#section__hero .btn", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("#section__hero picture", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power1.out"
    }, "-=0.8")

}