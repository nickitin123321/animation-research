const config = {
  tag: 'svg',
  name: 'Svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    border: 0,
    width: '100%',
    height: '100%',
    class: 'anychart-ui-support',
    style: 'display: block',
  },
  content: [
    {
      tag: 'g',
      name: 'Root',
      content: [
        {
          tag: 'g',
          name: 'shapes layers',
          content: [
            {
              tag: 'rect',
              name: 'Red-rect',
              attrs: {
                fill: 'green',
                stroke: 'green',
                'stroke-opacity': '100%',
                width: '100',
                height: '100',
                x: '0',
                y: '0',
              },
            },
          ],
        },
      ],
    },
  ],
};

//@ts-ignore
const stage = acg.create(config);
stage.container = document.getElementById('container');
stage.render();

const svg = document.querySelector('svg');
const width = svg?.getBoundingClientRect().width;
const height = svg?.getBoundingClientRect().height;
let coordX = 0;
let coordY = 0;
const v = 5;
let coordX2 = width! - 100;
let coordY2 = height! - 100;
const object = document.querySelector('rect');

function step(t: number): void {
  console.log(t);
  coordX += v;
  if (coordX > width! / 2) {
    object?.setAttribute('fill', 'black');
  }
  object?.setAttribute('transform', `translate(${coordX})`);
  const id = window.requestAnimationFrame(step);
  if (coordX > width! - 100) {
    object?.setAttribute('fill', 'red');
    coordY += v;
    if (coordY > height! / 2) {
      object?.setAttribute('fill', 'black');
    }
    object?.setAttribute('transform', `translate(${width! - 100} ${coordY})`);
    if (coordY > height! - 100) {
      coordX2 -= v;
      object?.setAttribute('transform', `translate(${coordX2} ${height! - 100})`);
    }
    if (coordX2 < 0) {
      coordY2 -= v;
      object?.setAttribute('transform', `translate(${0} ${coordY2})`);
    }
    if (coordY2 < 0) {
      window.cancelAnimationFrame(id);
    }
  }
}
// document.addEventListener('click', () =>  window.requestAnimationFrame(step));
window.requestAnimationFrame(step);
