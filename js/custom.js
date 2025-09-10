// GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ===== Timeline for pinned hero images =====
let tf = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "10% 5%",
        end: "60% center",
        scrub: true,
        markers: false,
        pin: false,
    }
});


// After first completes (img-3 moves to Y=0)
tf.to(".img-3-ani", {
    y: -350,
    duration: 2
});




// ===== Timeline for pinned hero images =====
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "center 40%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
        pin: true,
        pinSpacing: true
    }
});


// After first completes (img-3 moves to Y=0)
tl.to(".img-3-ani", {
    y: -632,
    duration: 5
});


// First animation (img-1 moves to X=0)
tl.to(".img-1-ani", {
    x: 0,
    duration: 15
});





// -----------------------------------


let textTx = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-text-ani",
        start: "60% 20%",     // when text enters viewport
        end: "bottom",         // controls scroll distance for the whole sequence
        scrub: true,
        markers: false,
    }
});

// Step 1: move txt-1 left, txt-2 right
// textTx.to(".txt-1", { x: 0, duration: 2 }, 0)
//     .to(".txt-2", { x: 0, duration: 2 }, 0)

//     // Step 3: fade both out
//     .to([".txt-1", ".txt-2"], { opacity: 0, duration: 5 });

// Step 4: shrink hero-gradiant-box


// ===== Separate timeline for hero text (not pinned) =====
let textTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-text-ani",
        start: "-50%",     // when text enters viewport
        end: "bottom",         // controls scroll distance for the whole sequence
        scrub: true,
        markers: false
    }
});

// Step 1: move txt-1 left, txt-2 right
textTl.to(".txt-1", { x: 0, duration: 5 }, 0)
    .to(".txt-2", { x: 0, duration: 5 }, 0)

    // Step 2: bring them back to opposite sides
    .to(".txt-1", { x: 160, duration: 2, opacity: 0 })
    .to(".txt-2", { x: -160, duration: 2, opacity: 0 }, "<")
    .to(".hero-gradiant-box", {
        scaleX: 0.8,
        duration: 2,
        transformOrigin: "center center"
    })
// Step 3: fade both out
// Step 4: shrink hero-gradiant-box

// ==========================================================

// ===== Separate timeline for hero text (not pinned) =====
let textTe = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-heading",
        start: "10% 20%",     // when text enters viewport
        end: "+=400",         // controls scroll distance for the whole sequence
        scrub: true,
        markers: false,
    }
});

// Step 3: fade both out
textTe.to([".exp-text-1", ".exp-text-2"], { opacity: 1, duration: 1 });

// Step 1: move txt-1 left, txt-2 right
textTe.to(".exp-text-1", { y: 0, scale: 1, duration: 2 }, 0)
    .to(".exp-text-2", { y: 0, scale: 1, duration: 2 }, 0)




jQuery(document).ready(function ($) {
    $(".card").each(function () {
        let $card = $(this);

        $card.on("mousemove", function (e) {
            let cardWidth = $card.innerWidth();
            let cardHeight = $card.innerHeight();
            let offset = $card.offset();
            let centerX = offset.left + cardWidth / 2;
            let centerY = offset.top + cardHeight / 2;

            // Softer rotation (less tilt)
            let xAxis = (e.pageX - centerX) / 40;
            let yAxis = (centerY - e.pageY) / 40;

            $card.css("transform", `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
        });

        $card.hover(function () {
            $card.toggleClass("has-transform");
        });

        $card.on("mouseleave", function () {
            $card.css("transform", `perspective(1000px) rotateY(0deg) rotateX(0deg)`);
        });
    });
});
