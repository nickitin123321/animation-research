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
            transform: 'scale(0.4) translate(0, 500)',
          },
        },
        {
          tag: 'g',
          name: 'button-layer',
          attrs: {
            id: 'button',
          },
        },
        {
          tag: 'g',
          name: 'shapes-layers-consistently',
          attrs: {
            id: 'shapes',
            transform: 'scale(0.4) translate(2000, 500)',
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
const animations = [];
const shapes = stage.find('shapes-layers');
for (let i = 1; i <= 7; i += 1) {
  const rect = {
    tag: 'rect',
    name: `rect${i}`,
    attrs: {
      width: '100',
      height: '0',
      x: `${250 * i}`,
      y: `${800 - i * 100}`,
      id: `${i}`,
    },
  };
  rects.push(rect);
}

for (let i = 1; i <= 7; i++) {
  const animate = {
    tag: 'animate',
    name: `graph-animate ${i}`,
    attrs: {
      attributeName: 'height',
      begin: 'startButton.click',
      from: '0',
      to: `${i * 100}`,
      dur: '200ms',
      fill: 'freeze',
      href: `#${i}`,
    },
  };

  animations.push(animate);
}
shapes.content = [...rects, ...animations];
stage.render();

const buttonLayer = stage.find('button-layer');
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
buttonLayer.content = [startButton, text];
stage.render();

const shps = stage.find('shapes-layers-consistently');
const rects1 = [];
const animations1 = [];
for (let i = 1; i <= 7; i += 1) {
  const rect1 = {
    tag: 'rect',
    name: `rect1${i}`,
    attrs: {
      width: '100',
      height: '0',
      x: `${250 * i}`,
      y: `${800 - i * 100}`,
      id: `1${i}`,
    },
  };
  rects1.push(rect1);
}

for (let i = 1; i <= 7; i++) {
  const animate1 = {
    tag: 'animate',
    name: `graph-animate1${i}`,
    attrs: {
      attributeName: 'height',
      begin: `${i}00ms`,
      from: '0',
      to: `${i * 100}`,
      dur: '1s',

      fill: 'freeze',
      href: `#1${i}`,
    },
  };

  animations1.push(animate1);
}
shps.content = [...rects1, ...animations1];
stage.render();
