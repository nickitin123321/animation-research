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
const shapes = stage.find('shapes-layers');

const line = {
  tag: 'path',
  name: `path`,
  attrs: {
    d: 'M 100 100 200 500 300 200 400 400 500 600 600 200 700 300 ',
    stroke: 'black',
    fill: 'none',
    'stroke-dasharray': `1728`,
    'stroke-dashoffset': `1728`,
  },
};
shapes.content = [line];
stage.render();

const path = document.querySelector('path');
const len = path?.getTotalLength();
console.log(len);
const button = document.querySelector('button');
button?.addEventListener('click', () => path?.classList.add('pathanimate'));
