const config = {
  tag: 'svg',
  name: 'Svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    border: 0,
    width: '1600',
    height: '700',
    class: 'anychart-ui-support',
    style: 'display: block',
    transform: 'scale(-0.6) translate(480 250)',
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
            transform: 'translate(200) scale(0.8)',
          },
        },
        {
          tag: 'g',
          name: 'bars-layers',
          attrs: {
            id: 'bars',
            transform: 'translate(100) scale(0.8)',
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

const rects = [];
const shapes = stage.find('shapes-layers');
for (let i = 0; i < 7; i++) {
  const rect = {
    tag: 'rect',
    name: `rect${i}`,
    attrs: {
      width: '100',
      height: `0`,
      x: `${250 * i}`,
      y: `${-i * 100}`,
      fill: '#1976d2',
      id: `id${i}`,
    },
  };

  rects.push(rect);
}
shapes.content = [...rects];
stage.render();

function shiftBars() {
  const bars = document.getElementById('shapes');
  Array.from(bars?.children!)
    .reverse()
    .forEach((bar, i) => {
      setTimeout(() => bar.classList.add(`anirect`), i * 200);
    });
}

const but = document.querySelector('button');
window.addEventListener('load', () => {
  shiftBars();
});
