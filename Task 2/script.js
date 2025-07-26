gsap.from(".hero h1", {
  duration: 1.2,
  y: -50,
  opacity: 0
});

gsap.from(".hero p", {
  duration: 1.2,
  delay: 0.4,
  y: -30,
  opacity: 0
});

gsap.from(".profile-img", {
  duration: 1.5,
  opacity: 0,
  scale: 0,
  ease: "back.out(1.7)"
});

gsap.utils.toArray(".section").forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    delay: i * 0.1
  });
});
