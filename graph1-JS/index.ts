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
for (let i = 0; i <= 7; i += 1) {
  const rect = {
    tag: 'rect',
    name: `rect${i}`,
    attrs: {
      width: '100',
      height: `${i * 100}`,
      x: `${250 * i}`,
      id: `${i}`,
    },
  };
  rects.push(rect);
}
shapes.content = [...rects];
stage.render();
const button = document.querySelector('button');
let height = 0;
let v = 3;
const container = document.getElementById('container')!;
const body = document.body;
const divHeight = body.getBoundingClientRect().height;
container.style.height = '0';

function addAnimation() {
  height += v;
  container.style.height = `${height}`;
  const id = requestAnimationFrame(addAnimation);
  if (height > divHeight) {
    cancelAnimationFrame(id);
  }
}
button?.addEventListener('click', addAnimation);
