document.addEventListener('DOMContentLoaded', (event) => {
    
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,DrawSVGPlugin,ScrollSmoother,SplitText);

    
    // Verifica si existe un contenedor de Barba en la carga inicial
    const initialContainer = document.querySelector('[data-barba="container"]');
    if (initialContainer) {
      const cssFile = initialContainer.getAttribute('data-css');
      if (cssFile) {
        const link = document.createElement('link');
        link.href = `/css/${cssFile}.css`;
        link.rel = 'stylesheet';
        link.setAttribute('data-dynamic', 'true');
        document.head.appendChild(link);
      }
    }


    if (initialContainer) {
        const jsFile = initialContainer.getAttribute('data-js');
        if (jsFile) {
            const existingScript = document.querySelector(`script[data-dynamic="${jsFile}"]`);
            if (!existingScript) {
                const script = document.createElement('script');
                script.src = `/js/gsap/${jsFile}.js`;
                script.type = 'text/javascript';
                script.async = true;
                script.setAttribute('data-dynamic', jsFile); // Usar el nombre del script como identificador
                document.body.appendChild(script);
            }
        }
    }


    // BarbaJs global:
    barba.init({
        transitions: [{
            name: 'default-transition',


            once(data) {
                initAnimations(data.next.container);
                gsapSoloAnimations(data.next.container);
            },


            leave(data) {
                gsap.to(".transition__top", { height: "50%", ease: "power1.out", duration: 0.4 });
                gsap.to(".transition__bottom", { height: "50%", ease: "power1.out", duration: 0.4 });
                gsap.killTweensOf(data.current.container);
                return gsap.to(data.current.container, {
                duration: 1,
                });
            },


            afterLeave(){
                gsap.to(data.next.container, { duration: 0.5, scrollTo: 0 });
                // Remover la hoja de estilo anterior
                const oldLink = document.querySelector('link[data-dynamic="true"]');
                if (oldLink) {
                    oldLink.parentNode.removeChild(oldLink);
                }
                // Remover el script dinámico
                const oldScript = document.querySelector('script[data-dynamic]');
                if (oldScript) {
                    document.body.removeChild(oldScript);
                }
            },

          
            enter(data) {
                // Loader páginas independientes:
                ;(function(){
                    function id(v){return document.getElementById(v); }
                    function loadbar() {
                    var ovrl = id("overlay"),
                    log = id("logoloader"),
                    prog = id("progress"),
                    bgbar = id("progress__bg"),
                    stat = id("progstat"),
                    img = document.images,
                    c = 0;
                    tot = img.length;
                
                        function imgLoaded(){
                            c += 1;
                            var perc = ((100/tot*c) << 0) +"%";
                            prog.style.width = perc;
                            stat.innerHTML = ""+ perc;
                            if(c===tot) return doneLoading();
                        }
                        function doneLoading(){
                            ovrl.style.opacity = 0;
                            setTimeout(function(){ 
                                ovrl.style.display = "none";
                                gsap.to(".transition__top", { height: "0%", ease: "power1.in", duration: 0.7 });
                                gsap.to(".transition__bottom", { height: "0%", ease: "power1.in", duration: 0.7 });
                                gsap.from("#inner__header", { y: -100, ease: "power1.out", duration: 0.5, delay: 0.8 });
                            }, 500);/**/
                        }
                        for(var i=0; i<tot; i++) {
                            var tImg = new Image();
                            tImg.onload = imgLoaded;
                            tImg.onerror = imgLoaded;
                            tImg.src = img[i].src;
                        }    
                    }
                    document.addEventListener('DOMContentLoaded', loadbar, false);
                }());

                // Agregar nueva hoja de estilo
                const newCss = data.next.container.getAttribute('data-css');
                if (newCss) {
                    const link = document.createElement('link');
                    link.href = `/css/${newCss}.css`;
                    link.rel = 'stylesheet';
                    link.setAttribute('data-dynamic', 'true');
                    document.head.appendChild(link);
                }

                // Cargar el JS
                const newJs = data.next.container.getAttribute('data-js');
                if (newJs) {
                const script = document.createElement('script');
                script.src = `/js/gsap/${newJs}.js`;
                script.type = 'text/javascript';
                script.async = true;
                document.body.appendChild(script);
                }

                // Reiniciar animaciones
                initAnimations(data.next.container);
                gsapSoloAnimations(data.next.container);
            }
        }]
    });
      




    // Función para reiniciar todo el GSAP después de cada transición:
    function initAnimations(container) {
        
        
        // GSAP GLOBAL:

        let mm = gsap.matchMedia();
        // Animaciones exclusivas para resolución escritorio:
        mm.add("(min-width: 1025px)", () => {

            // ScrollSmoother init:
            ScrollSmoother.create({
                smooth: 1,
                effects: true,
                smoothTouch: 0.1,
            });

            // Batch fadeInOut:
            const Stagger = 0.1;
            // Selección de elementos dentro de ".fadeInOut"
            const h2Elements = document.querySelectorAll(".fadeInOut h2");
            const h3Elements = document.querySelectorAll(".fadeInOut h3");
            const pElements = document.querySelectorAll(".fadeInOut p");
            const imgElements = document.querySelectorAll(".fadeInOut img");
            // Condicional en caso de que existan
            if (h2Elements.length) gsap.set(h2Elements, {opacity: 0, x: -50});
            if (h3Elements.length) gsap.set(h3Elements, {opacity: 0, x: -50});
            if (pElements.length) gsap.set(pElements, {opacity: 0, y: 50});
            if (imgElements.length) gsap.set(imgElements, {opacity: 0, y: 50});

            ScrollTrigger.batch([".fadeInOut h3", ".fadeInOut h2", ".fadeInOut p", ".fadeInOut img"], {
                start: 'top 80%', end: 'top 80%',
                onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, x: 0, stagger: Stagger, overwrite: true }),
                onLeave: batch => gsap.to(batch, { opacity: 1, y: 0, x: 0, stagger: Stagger, overwrite: true }),
                onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, x: 0, stagger: Stagger, overwrite: true }),
                onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 50, stagger: Stagger, overwrite: true })
            });


            // Batch Cards
            const card = document.querySelectorAll(".card");
            if (card.length) gsap.set(card, {opacity: 0, y: 100, x: 0});
            ScrollTrigger.batch(".card", {
                start: 'top 80%', end: 'top 80%',
                onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, x: 0, stagger: Stagger, overwrite: true }),
                onLeave: batch => gsap.to(batch, { opacity: 1, y: 0, x: 0, stagger: Stagger, overwrite: true }),
                onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, x: 0, stagger: Stagger, overwrite: true }),
                onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 100, x: 0, stagger: Stagger, overwrite: true })
            });


            // Batch Footer:
            gsap.set(".footer__column", {opacity: 0, x: -50});
            ScrollTrigger.batch(".footer__column", {
                start: 'top 80%', end: 'top 80%',
                onEnter: batch => gsap.to(batch, { opacity: 1, x: 0, stagger: Stagger, overwrite: true }),
                onLeave: batch => gsap.to(batch, { opacity: 1, x: 0, stagger: Stagger, overwrite: true }),
                onEnterBack: batch => gsap.to(batch, { opacity: 1, x: 0, stagger: Stagger, overwrite: true }),
                onLeaveBack: batch => gsap.to(batch, { opacity: 0, x: -50, stagger: Stagger, overwrite: true })
            });

                // TERMINA GSAP GLOBAL ESCRITORIO

        });



        // Separación visual para telefonos:
        telText = new SplitText(".tel__text", { type: "chars" }),
        telTextChars = telText.chars;
        gsap.to(telTextChars, {});


    } // Termina función GSAP


    
    // Mobile menu:
    var check = document.querySelector('#mobile__trigger');
    var menu = document.querySelector('#mobile__menu');
    var bgActive = document.querySelector('#mobile__active');
    var both = [check, bgActive];
    both.forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            check.classList.toggle('active');
            menu.classList.toggle('show');
            bgActive.classList.toggle('show');
        });
    });



});