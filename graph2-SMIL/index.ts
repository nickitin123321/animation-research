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
          content: [
            {
              tag: 'path',
              name: `path`,
              attrs: {
                d: 'M 100 100 200 500 300 200 400 400 500 600 600 200 700 300 ',
                stroke: 'black',
                fill: 'none',
                'stroke-dasharray': '2000',
                'stroke-dashoffset': '2000',
                id: 'path',
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

const shapes = stage.find('shapes-layers');
const animate = {
  tag: 'animate',
  name: `animate`,
  attrs: {
    attributeName: 'stroke-dashoffset',
    begin: 'startButton.click',
    fill: 'freeze',
    dur: '5s',
    from: '2200',
    to: '0',
    href: '#path',
  },
};

const startButton = {
  tag: 'rect',
  name: `startButton`,
  attrs: {
    id: 'startButton',
    style: 'cursor:pointer;',
    x: '0',
    y: '0',
    height: '50px',
    width: '100px',
    fill: '#EFEFEF',
    stroke: 'black',
  },
};

const text = {
  tag: 'text',
  name: `text`,
  attrs: {
    x: '50',
    y: '30',
    'text-anchor': 'middle',
    style: 'pointer-events:none;',
  },
  content: 'animate',
};

shapes.content = [...shapes.content, animate, startButton, text];
stage.render();

// const button = document.querySelector('button');
// button?.addEventListener('click', draw);
