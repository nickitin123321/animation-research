//@ts-ignore
const config = acg.templates.svg;
config.content = [
  ...config.content,
  {
    tag: 'g',
    name: 'Labels-Layer',
    attrs: {
      id: 'labels',
    },
  },
];
//@ts-ignore
const stage = acg.create(config);
//@ts-ignore
const pather = acg.pather();
function getRandomData() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10) + 1);
}
const angles: Array<number> = [];
stage.container = document.getElementById('container');
stage.render();
const container = document.getElementById('container') as Element;
const width = container.getBoundingClientRect().width;
const height = container.getBoundingClientRect().height;

function renderStage(stage: any, data: Array<number>) {
  const dataSet = [];
  const pathD: Array<string> = [];
  const rootLayer = stage.find('Root-Layer');
  rootLayer.attrs = {
    ...rootLayer.attrs,
    id: 'shapes',
  };
  const labelsLayer = stage.find('Labels-Layer');

  const sum = data.reduce((acc, curr) => acc + curr, 0);
  const centerX = width / 2;
  const centerY = height / 2;
  const slicesData = data.map((value, index) => {
    return {
      value,
      index,
      weight: value / sum,
      name: `Point${index}: ${value}`,
    };
  });
  dataSet.push(slicesData);
  const slicesFactory = rootLayer.factory('Slices-Factory', {
    tag: 'path',
    attrs: {
      stroke: 'white',
      fill: 'red',
      'data-acgPointType': 'slice',
      'transform-origin': `${centerX} ${centerY}`,
    },
  });

  const labelsFactory = labelsLayer.factory('Labels-Factory', {
    tag: 'text',
    attrs: {
      'data-acgPointType': 'label',
      'transform-origin': `${centerX} ${centerY}`,
      class: 'labels',
    },
  });

  slicesFactory.clear();
  labelsFactory.clear();

  const radius = 0.6 * Math.min(centerX, centerY);

  const startAngle = -Math.PI / 2;
  let start = startAngle;
  let weightCurrSum = 0;

  const color = ['red', 'green', 'blue', 'orange', 'yellow', 'navy', 'orchid'];
  dataSet[0].forEach((d, i) => {
    pather.clear();
    const path = slicesFactory.add();

    path.attrs = {
      ...path.attrs,
      fill: `${color[i]}`,
    };

    const offsetX = Math.cos(start) * radius;
    const offsetY = Math.sin(start) * radius;

    const destX = centerX + offsetX;
    const destY = centerY + offsetY;

    weightCurrSum += d.weight;
    const largeArcFlag = d.weight > 0.5 ? 1 : 0;
    const alpha1 = start;

    start = startAngle + 2 * Math.PI * weightCurrSum;
    angles.push((start * 180) / -Math.PI);

    const alpha2 = start;

    const labelOffsetX = Math.cos((alpha2 + alpha1) / 2) * radius;
    const labelOffsetY = Math.sin((alpha2 + alpha1) / 2) * radius;

    const label = labelsFactory.add();
    label.attrs = {
      ...label.attrs,
      x: centerX + labelOffsetX / 0.7,
      y: centerY + labelOffsetY / 0.7,
    };

    const nextOffsetX = Math.cos(start) * radius;
    const nextOffsetY = Math.sin(start) * radius;
    pather
      .moveTo(centerX, centerY)
      .lineTo(destX, destY)
      .arcTo(radius, radius, 0, largeArcFlag, 1, centerX + nextOffsetX, centerY + nextOffsetY)
      .close()
      .applyTo(path);
    pathD.push(path.attrs.d);
  });
  return pathD;
}

console.log(angles);

function spread() {
  const slices = document.getElementById('shapes');
  const labels = document.getElementById('labels');
  Array.from(slices?.children!).forEach((slice, i) => {
    slice?.classList.add(`rotate${i}`);
  });
  Array.from(labels?.children!).forEach((label, i) => {
    label?.classList.add(`rotate${i}`);
  });
  stage.render();
}

const data = [1, 2, 3, 4];
const pathDs = renderStage(stage, data);
stage.render();
function newData() {
  const input = document.getElementById('input');
  //@ts-ignore
  const d = input?.value.split(' ');

  const data1 = d.map((el: string) => +el);
  console.log(data1);

  const pathD1s = renderStage(stage, data1);

  const style = document.createElement('style');
  let keyFrames = '';

  pathDs.forEach((pathD: string, i: number) => {
    keyFrames += `
  .rotate${i} {
    animation: rotate${i} 1s linear 1;
    animation-fill-mode: forwards;
  }
  @keyframes rotate${i} {
    0% {
      d: path("${pathD}");
    }
    100% {
      d: path("${pathD1s[i]}");
    }
  }
  `;
  });

  style.innerHTML = keyFrames;
  document.head.appendChild(style);
}
const but = document.getElementById('but');
but?.addEventListener('click', () => {
  newData();
  spread();
});
