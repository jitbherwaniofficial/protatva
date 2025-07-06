console.log("Hare Krishna");

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


    gsap.from(".one", {
        scrollTrigger: {
            trigger: ".section_two",
            scroller: "body",
            scrub: 1,
            start: "top 100%",
            end: "top 0%",
        },
        x: 1000,
        y: -1000,
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
            start: "top 80%",
            end: "50% 40%",
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
    
    gsap.from(".one", {
        scrollTrigger: {
            trigger: ".section_two",
            scroller: "body",
            scrub: 1,
            start: "top 100%",
            end: "top 0%",
        },
        x: 1000,
        y: -1000,
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
            start: "top 90%",
            end: "50% 10%",
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


})


