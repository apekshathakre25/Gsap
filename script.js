const tl = gsap.timeline();

tl.from("#nav h3", {
  duration: 1,
  delay: 0.5,
  opacity: 0,
  y: -100,
  stagger: 0.2,
});

tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.4,
  stagger: 0.4,
});

tl.from("img", {
  opacity: 0,
  duration: 0.4,
  stagger: 0.4,
  rotate: 4,
  x: 100,
});

tl.from("#footer h3", {
  y: 100,
  opacity: 0,
  duration: 0.4,
  stagger: 0.4,
  delay: 0.5,
});
