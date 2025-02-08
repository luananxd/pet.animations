const parallax = document.getElementById("parallax");
const parallaxCenterX = parallax.offsetWidth / 2;
const parallaxCenterY = parallax.offsetHeight / 2;

parallax.addEventListener("mousemove", (event) => {
  console.log(event.target)
  const x = (event.clientX - parallaxCenterX) * -0.008;
  const y = (event.clientY - parallaxCenterY) * -0.01;

  parallax.style.setProperty("--move-x", x + "deg");
  parallax.style.setProperty("--move-y", y + "deg");
});
