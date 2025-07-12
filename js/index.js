console.log("Hare Krishna");
window.addEventListener('load', () => {
    window.scrollTo(0, 0); // or gsap.to(window, {scrollTo: 0, duration: 0});

    // Now initialize GSAP Scroll-related stuff
    ScrollTrigger.refresh();
});


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
    normalizeScroll: true
});

// Optional: lock all interaction
document.addEventListener("wheel", preventScroll, { passive: false });
document.addEventListener("touchmove", preventScroll, { passive: false });

function preventScroll(e) {
    e.preventDefault();
}

// Unlock after animation
function unlockScroll() {
    document.removeEventListener("wheel", preventScroll);
    document.removeEventListener("touchmove", preventScroll);
}


const mm = gsap.matchMedia();

// Desktop/Large Screens
mm.add("(min-width: 1367px) and (max-width: 1920px)", () => {

    gsap.from('#protatva g .cls-7', {
        transform: "translateX(-200%)",
        stagger: 0.3,
        ease: "back.out(1.7)",
        duration: 2,
    })


    gsap.from('#protatva circle', {
        transform: "translateX(-100%)",
        stagger: 0.2,
        ease: "elastic.out(1,0.3)",
        scale: 2,
        duration: 2,
        delay: 2,
    })

    gsap.from('#circle', {
        ease: "bounce.out",
        delay: 3,
        y: -1000,
        duration: 1,
    })


    const logo = document.querySelector(".logo");

    // Disable scroll via ScrollSmoother
    smoother.paused(true); // 🔒 disables fake scrolling

    gsap.to(logo, {
        ease: "elastic.out(1,0.3)",
        delay: 5,
        backgroundColor: "transparent",
        scale: 0,
        rotate: 145,
        duration: 1.35,
        transformOrigin: "43.9% 62%",
        onComplete: () => {
            smoother.paused(false); // 🔓 enable scroll again
            console.log("Scroll enabled after animation");
        }
    });


    gsap.from(".main_title span:nth-child(1)", {
        ease: "back.out(1.7)",
        delay: 5,
        x: -1000,
        duration: 2,
    })

    gsap.from(".main_title span:nth-child(2)", {
        ease: "back.out(1.7)",
        delay: 5,
        x: 1000,
        duration: 2,
    })

    gsap.from(".main_para span", {
        ease: "elastic.out(1,0.3)",
        delay: 5,
        scale: 0,
        duration: 2,
        stagger: 0.2,
    })

    gsap.from(".tested", {
        ease: "elastic.out(1,0.3)",
        delay: 5,
        y: -1000,
        duration: 2,
        stagger: 0.2,
    })



    gsap.to('.main_title span:nth-child(1)', {
        scrollTrigger: {
            trigger: ".main_title span:nth-child(2)",
            scroller: "body",
            scrub: 3,
            start: "top 80%",
            end: "top 0%",
        },
        x: 1920,
        ease: "power1.out",
    })


    gsap.to('.main_title span:nth-child(2)', {
        scrollTrigger: {
            trigger: ".main_title span:nth-child(2)",
            scroller: "body",
            scrub: 3,
            start: "top 80%",
            end: "top 0%",
        },
        x: -1920,
        duration: 2,
        ease: "power1.out",
    })

    gsap.to(".main_para span", {
        scrollTrigger: {
            trigger: ".main_title span:nth-child(2)",
            scroller: "body",
            scrub: 2,
            start: "top 60%",
            end: "top 0%",
        },
        ease: "power1.out",
        x: -1000,
        duration: 2,
        stagger: 0.2,
    })


    gsap.to(".tested img", {
        scrollTrigger: {
            trigger: ".main_title span:nth-child(2)",
            scroller: "body",
            scrub: 2,
            start: "top 60%",
            end: "top 0%",
        },
        ease: "power1.out",
        duration: 2,
        x: 1000,
        stagger: -0.2,
    })

    gsap.to(".main_image", {
        scrollTrigger: {
            trigger: ".main_title span:nth-child(2)",
            scroller: "body",
            scrub: true,
            start: "90% 90%",
            end: "90% 0%",
            // start: "top 50%",
            // end: "top 30%",
        },
        top: 1050,
        left: -520,
        rotate: -35,
        ease: "power1.out",
        scale: 0.70,
    })

    gsap.from(".two", {
        scrollTrigger: {
            trigger: ".section_two",
            scroller: "body",
            scrub: 3,
            start: "top 100%",
            end: "top 0%",
        },
        x: -2000,
        ease: "power1.out",
        rotate: -180,
    })


    gsap.from(".one img", {
        scrollTrigger: {
            trigger: ".section_two",
            scroller: "body",
            scrub: 1,
            start: "top 100%",
            end: "top 0%",
        },
        x: 1000,
        y: -1400,
        rotate: 180,
        ease: "power1.out",
    })


    gsap.to(".one", {
        scrollTrigger: {
            trigger: ".section_three",
            scroller: "body",
            scrub: 2,
            start: "top 100%",
            end: "top 0%",
        },
        top: 955,
        rotate: -45,
        ease: "power1.out",
        scale: 1.3,
    })

    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_three",
            scroller: "body",
            scrub: 3,
            start: "top 83%",
            end: "50% 50%",
            // markers:true,
        },
        delay: 3
    })
    tl3.from(".pure", {
        left: -1000,
        ease: "power2.out",
    })
    tl3.from(".nutrition", {
        right: -2000,
        ease: "power2.out",
    })
    tl3.from(".for", {
        left: -900,
        ease: "power2.out",
    })

    tl3.from(".muscle", {
        right: -1500,
        ease: "power2.out",
    })

    tl3.from(".growth", {
        left: -1500,
        ease: "power2.out",
    })


    let tl4 = gsap.timeline({ delay: 4 })
    tl4.to(".s4_gif video", {
        scrollTrigger: {
            trigger: ".section_four",
            scroller: "body",
            scrub: true,
            start: "top 30%",
            end: "top 10%",
            // markers:true,
        },
        width: "50%",
        height: "75%",
        left: 0,
        transformOrigin: "0% 5%",
        objectFit: "cover",
        ease: "power2.out",
    })

    tl4.to(".side_text p span", {
        scrollTrigger: {
            trigger: ".section_four",
            scroller: "body",
            scrub: 3,
            start: "top 5%",
            end: "top -30%",
            // markers: true,
        },
        transform: "translateY(0%)",
        stagger: 0.3,
        ease: "power2.out",
    });

    // split Text
    let split = SplitText.create('.section_five .section_five_h3', {
        type: 'chars, words, lines',
        mask: 'lines'
    })

    gsap.from(split.chars, {
        scrollTrigger: {
            trigger: ".section_five",
            scroller: "body",
            scrub: 3,
            start: "top 60%",
            end: "top 10%",
            // markers: true,
        },
        yPercent: () => gsap.utils.random(-100, 100),
        rotation: () => gsap.utils.random(-30, 30),
        autoAlpha: 0,
        ease: 'back.out(1.5)',
        stagger: {
            amount: 0.5,
            from: 'random'
        },
        duration: 1.5
    })


});

mm.add("(min-width: 1281px) and (max-width: 1366px)", () => {
    gsap.from('#protatva g .cls-7', {
        transform: "translateX(-200%)",
        stagger: 0.3,
        ease: "back.out(1.7)",
        duration: 2,
    })


    gsap.from('#protatva circle', {
        transform: "translateX(-100%)",
        stagger: 0.2,
        ease: "elastic.out(1,0.3)",
        scale: 2,
        duration: 2,
        delay: 2,
    })

    gsap.from('#circle', {
        ease: "bounce.out",
        delay: 3,
        y: -1000,
        duration: 1,
    })


    const logo = document.querySelector(".logo");

    // Disable scroll via ScrollSmoother
    smoother.paused(true); // 🔒 disables fake scrolling

    gsap.to(logo, {
        ease: "elastic.out(1,0.3)",
        delay: 5,
        backgroundColor: "transparent",
        scale: 0,
        rotate: 145,
        duration: 1.35,
        transformOrigin: "43.9% 63%",
        onComplete: () => {
            smoother.paused(false); // 🔓 enable scroll again
            console.log("Scroll enabled after animation");
        }
    });




    gsap.from(".main_title span:nth-child(1)", {
        ease: "back.out(1.7)",
        delay: 5,
        x: -1000,
        duration: 2,
    })

    gsap.from(".main_title span:nth-child(2)", {
        ease: "back.out(1.7)",
        delay: 5,
        x: 1000,
        duration: 2,
    })

    gsap.from(".main_para span", {
        ease: "elastic.out(1,0.3)",
        delay: 5,
        scale: 0,
        duration: 2,
        stagger: 0.2,
    })

    gsap.from(".tested", {
        ease: "elastic.out(1,0.3)",
        delay: 5,
        y: -1000,
        duration: 2,
        stagger: 0.2,
    })



    gsap.to('.main_title span:nth-child(1)', {
        scrollTrigger: {
            trigger: ".main_title span:nth-child(2)",
            scroller: "body",
            scrub: 2,
            start: "top 80%",
            end: "top 0%",
        },
        x: 1500,
        duration: 2,
        ease: "power1.out",
    })


    gsap.to('.main_title span:nth-child(2)', {
        scrollTrigger: {
            trigger: ".main_title span:nth-child(2)",
            scroller: "body",
            scrub: 2,
            start: "top 80%",
            end: "top 0%",
        },
        x: -1500,
        duration: 2,
        ease: "power1.out",
    })

    gsap.to(".main_para span", {
        scrollTrigger: {
            trigger: ".main_title span:nth-child(2)",
            scroller: "body",
            scrub: 2,
            start: "top 60%",
            end: "top 0%",
        },
        ease: "power1.out",
        x: -1000,
        duration: 2,
        stagger: 0.2,
    })


    gsap.to(".tested img", {
        scrollTrigger: {
            trigger: ".main_title span:nth-child(2)",
            scroller: "body",
            scrub: 2,
            start: "top 60%",
            end: "top 0%",
        },
        ease: "power1.out",
        duration: 2,
        x: 1000,
        stagger: -0.2,
    })


    gsap.to(".main_image", {
        scrollTrigger: {
            trigger: ".main_title span:nth-child(2)",
            scroller: "body",
            scrub: true,
            start: "90% 90%",
            end: "90% 0%",
            // start: "top 50%",
            // end: "top 30%",
        },
        top: 690,
        left: -350,
        rotate: -35,
        ease: "power1.out",
        scale: 0.75,
    })

    gsap.from(".two", {
        scrollTrigger: {
            trigger: ".section_two",
            scroller: "body",
            scrub: 3,
            start: "top 100%",
            end: "top 0%",
        },
        x: -2000,
        ease: "power1.out",
        rotate: -180,
    })

    gsap.to(".two", {
        left: "12%"
    })

    gsap.from(".one img", {
        scrollTrigger: {
            trigger: ".section_two",
            scroller: "body",
            scrub: 3,
            start: "top 100%",
            end: "top 0%",
        },
        x: 1000,
        y: -2000,
        rotate: 180,
        ease: "power1.out",
    })


    gsap.to(".one", {
        scrollTrigger: {
            trigger: ".section_three",
            scroller: "body",
            scrub: 2,
            start: "top 100%",
            end: "top 0%",
        },
        top: 640,
        rotate: -45,
        ease: "power1.out",
        scale: 1.2,
    })

    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_three",
            scroller: "body",
            scrub: 4,
            start: "20% 100%",
            end: "25% 20%",
            // markers:true,
        },
        delay: 3
    })
    tl3.from(".pure", {
        left: -1000,
        ease: "power2.out",
    })
    tl3.from(".nutrition", {
        right: -2000,
        ease: "power2.out",
    })
    tl3.from(".for", {
        left: -900,
        ease: "power2.out",
    })

    tl3.from(".muscle", {
        right: -1500,
        ease: "power2.out",
    })

    tl3.from(".growth", {
        left: -1500,
        ease: "power2.out",
    })

    let tl4 = gsap.timeline({ delay: 4 })
    tl4.to(".s4_gif video", {
        scrollTrigger: {
            trigger: ".section_four",
            scroller: "body",
            scrub: true,
            start: "top 30%",
            end: "top 10%",
            // markers:true,
        },
        width: "50%",
        height: "75%",
        left: 0,
        transformOrigin: "0% 5%",
        objectFit: "cover",
        ease: "power2.out",
    })

    tl4.to(".side_text p span", {
        scrollTrigger: {
            trigger: ".section_four",
            scroller: "body",
            scrub: 3,
            start: "top 5%",
            end: "top -30%",
            // markers: true,
        },
        transform: "translateY(0%)",
        stagger: 0.3,
        ease: "power2.out",
    });


    // split Text
    let split = SplitText.create('.section_five .section_five_h3', {
        type: 'chars, words, lines',
        mask: 'lines'
    })

    gsap.from(split.chars, {
        scrollTrigger: {
            trigger: ".section_five",
            scroller: "body",
            scrub: 3,
            start: "top 60%",
            end: "top 10%",
            // markers: true,
        },
        yPercent: () => gsap.utils.random(-100, 100),
        rotation: () => gsap.utils.random(-30, 30),
        autoAlpha: 0,
        ease: 'back.out(1.5)',
        stagger: {
            amount: 0.5,
            from: 'random'
        },
        duration: 1.5
    })




})
