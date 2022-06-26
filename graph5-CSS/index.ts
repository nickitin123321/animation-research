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
    transform: 'scale(0.8)',
  },
  content: [
    {
      tag: 'g',
      name: 'Root',
      content: [
        {
          tag: 'g',
          name: 'shapes-layers',
          attrs: {
            id: 'shapes',
          },
        },
      ],
    },
  ],
};

//@ts-ignore
const stage = acg.create(config);
stage.container = document.getElementById('container');
stage.render();
// const height: Array<number> = [];
// for (let i = 0; i++; i <= 10) {
//   height.push(10 * i);
// }
const rects = [];
const shapes = stage.find('shapes-layers');
for (let i = 0; i <= 7; i++) {
  const rect = {
    tag: 'rect',
    name: `rect${i}`,
    attrs: {
      width: '100',
      height: `${i * 100}`,
      x: `${250 * i}`,
      y: `${800 - i * 100}`,
      'fill-opacity': `${i * 0.1}`,
      fill: 'green',
      id: 'id',
    },
  };

  rects.push(rect);
}
shapes.content = [...rects];
stage.render();

function addRect(): void {
  const shapes = stage.find('shapes-layers');
  console.log(shapes);
  const rect1 = {
    tag: 'rect',
    name: `rect123`,
    attrs: {
      width: '100',
      height: `${8 * 100}`,
      x: `${250 * 8}`,
      y: `${800 - 8 * 100}`,
      'fill-opacity': `${7 * 0.1}`,
      fill: 'green',
      id: 'id',
    },
  };
  shapes.content = [...shapes.content, rect1];
  stage.render();
}
function shiftBars() {
  const bars = document.getElementById('shapes');
  bars?.classList.add('anirect');
  // Array.from(bars?.children!).forEach((bar) => bar.classList.add('anirect'));
}
// function scaleBars() {
//   const bars = document.getElementById('shapes');
//   Array.from(bars?.children!).forEach((bar) => bar.classList.add('scalerect'));
//   // bars?.classList.add('anirect');
// }

const but = document.querySelector('button');
but?.addEventListener('click', () => {
  shiftBars();
  addRect();
});

// const button = document.querySelector('button');
// button?.addEventListener('click', addAnimate);
