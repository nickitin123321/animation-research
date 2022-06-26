const config = {
  tag: 'svg',
  name: 'Svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    border: 0,
    transform: 'scale(0.8)',
    width: '1400px',
    height: '700px',
    class: 'anychart-ui-support',
    style: 'display: block',
  },
  content: [
    {
      tag: 'g',
      name: 'Root',
      attrs: {
        transform: 'scale(0.75) translate(-100 0)',
      },
      content: [
        {
          tag: 'g',
          name: 'shapes-layers',
          attrs: {
            id: 'shapes',
          },
        },
        {
          tag: 'path',
          name: 'axes',
          attrs: {
            d: 'M 100 100 L 100 800  L 1875 800 ',
            stroke: 'black',
            fill: 'none',
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
for (let i = 1; i <= 7; i++) {
  const rect = {
    tag: 'rect',
    name: `rect${i}`,
    attrs: {
      width: '100',
      height: `${i * 100}`,
      x: `${250 * i}`,
      y: `${800 - i * 100}`,
      'fill-opacity': '0.3',
      fill: 'orange',
      'transform-origin': `${250 * i + 50} ${800 - i * 100}`,
    },
  };
  rects.push(rect);
}

shapes.content = [...rects];
stage.render();

const div = <HTMLDivElement>document.getElementById('container');
function addAnimate(event: MouseEvent) {
  const ev = event.target as HTMLElement;
  if (ev.tagName != 'rect') return;
  ev.classList.remove('anirectr');
  setTimeout(() => ev.classList.add('anirect'), 150);
}

function removeAnimate(event: MouseEvent) {
  const ev = event.target as HTMLElement;
  if (ev.tagName != 'rect') return;

  setTimeout(() => {
    ev.classList.add('anirectr');
    ev.classList.remove('anirect');
  }, 150);
}

// function freeze(event: MouseEvent) {
//   const ev = event.target as HTMLElement;
//   if (ev.tagName != 'rect') return;
//   if (ev.classList.contains('freeze')) {
//     ev.classList.remove('freeze');
//   } else {
//     ev.classList.add('freeze');
//     ev.classList.remove('anirect');
//   }
// }

div?.addEventListener('mouseover', addAnimate);
div?.addEventListener('mouseout', removeAnimate);
// div?.addEventListener('click', freeze);
