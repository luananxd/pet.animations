const parallax = document.getElementById("parallax");
const parallaxCenterX = parallax.offsetWidth / 2;
const parallaxCenterY = parallax.offsetHeight / 2;

const LAYER_1_COEFFICIENT = 0.3;
const LAYER_2_COEFFICIENT = 0.15;
const LAYER_3_COEFFICIENT = 0.05;

const layers = Array.from(document.querySelectorAll(".layer"));

const getCoefficient = (layer) => {
  if (layer === "layer-1") return LAYER_1_COEFFICIENT;
  if (layer === "layer-2") return LAYER_2_COEFFICIENT;
  if (layer === "layer-3") return LAYER_3_COEFFICIENT;
};

parallax.addEventListener("mousemove", (event) => {
  const deltaX = parallaxCenterX - event.clientX;
  const deltaY = parallaxCenterY - event.clientY;

  layers.forEach((layer) => {
    const id = layer.classList[1];

    layer.style.left = deltaX * getCoefficient(id) + "px";
    layer.style.top = deltaY * getCoefficient(id) + "px";
  });
});
