const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const imageBanner = document.querySelector(".imagebanner");
const headLine = document.querySelector(".headline");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(
  imageBanner,
  1,
  { height: "0%" },
  { height: "90%", ease: Power2.easeInOut }
).fromTo(
  imageBanner,
  1.2,
  { width: "100%" },
  { width: "80%", ease: Power2.easeInOut }

).fromTo(
  slider,
  1.2,
  { x: "-100%" },
  { x: "0%", ease: Power2.easeInOut },"-=1.2"
)
.fromTo(
    logo,
    0.5,
    { opacity:0 , x: 10 },
    { opacity: 1, x: 0, ease: Power2.easeInOut },"-=0.5"
  )
  .fromTo(
    hamburger,
    0.2,
    { opacity: 0 , x: 10 },
    { opacity: 1, x: 0, ease: Power2.easeInOut },"-=0.5"
  );
