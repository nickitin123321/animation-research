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
            opacity: '1',
            stroke: 'black',
            transform: 'translate(-150 0) scale(1.3)',
            'fill-opacity': '1',
          },
          content: [
            {
              tag: 'path',
              name: 'path4',
              attrs: {
                id: 'path4',
                d: `M 446.5 227.5 L 446.5 57.849999999999994 A 169.65 169.65 0 0 1 616.15 227.5 Z`,
                fill: 'orange',
                'transform-origin': `446.5 227.5`,
              },
            },
            {
              tag: 'path',
              name: 'path3',
              attrs: {
                id: 'path3',
                d: ` 
                M 446.5 227.5 L 616.15 227.5 A 169.65 169.65 0 0 1 446.5 397.15 Z  `,
                fill: 'yellow',
                'transform-origin': `446.5 227.5`,
              },
            },
            {
              tag: 'path',
              name: 'path2',
              attrs: {
                id: 'path2',
                d: `
                M 446.5 227.5 L 446.5 397.15 A 169.65 169.65 0 0 1 276.85 227.5 Z `,
                fill: 'red',
                'transform-origin': `446.5 227.5`,
              },
            },

            {
              tag: 'path',
              name: 'path1',
              attrs: {
                id: 'path1',
                d: `M 446.5 227.5 L 276.85 227.50000000000003 A 169.65 169.65 0 0 1 446.49999999999994 57.849999999999994 Z `,
                fill: 'green',
                'transform-origin': `446.5 227.5`,
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

function spread() {
  const slices = document.getElementById('shapes');
  Array.from(slices?.children!).forEach((slice, i) => {
    slice?.classList.add(`morph${i}`);
  });
}

function freeze(event: MouseEvent) {
  const ev = event.target as HTMLElement;
  if (ev.tagName != 'path') return;
  if (ev.classList.contains('freeze')) {
    ev.classList.remove('freeze');
  } else {
    ev.classList.remove(`${ev.className['baseVal']}`);
    ev.classList.add('anirect');
  }
}

function removeAnimate(event: MouseEvent) {
  const ev = event.target as HTMLElement;
  if (ev.classList.contains('anirect')) {
    ev.classList.remove('anirect');
    ev.classList.add('anirectr');
  }
}
setTimeout(() => {
  console.log(1);
  const div = <HTMLDivElement>document.getElementById('container');
  div?.addEventListener('mouseover', freeze);
  div?.addEventListener('mouseout', removeAnimate);
}, 1000);

window.addEventListener('load', spread);
