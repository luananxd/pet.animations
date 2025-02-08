const items = Array.from(document.getElementsByClassName('scroll__item') ?? []);
const zStartPosition = 200;
let currentPosition = zStartPosition
const opacityHighEdge = 500;
const opacityLowEdge = -1500;
const itemsGap = 500;

const setPositions = () => {
  items.forEach((item, index) => {
    const position = currentPosition - (itemsGap * index);
    item.style.transform = `translateZ(${position}px)`;

    if(position >= opacityHighEdge || position <= opacityLowEdge) {
      item.style.opacity = 0;
    } else {
      item.style.opacity = 1;
    }
  })
}

document.addEventListener('wheel', (event) => {
  currentPosition -= event.deltaY
  setPositions()
})

setPositions()