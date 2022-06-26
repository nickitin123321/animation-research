const config = {
  tag: 'svg',
  name: 'Svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    border: 0,
    width: '800px',
    height: '550px',
    class: 'anychart-ui-support',
    style: 'display: block',
  },
  content: [
    {
      tag: 'g',
      name: 'Root',
      attrs: {
        id: 'root',
        transform: 'scale(1.6) translate(40 -120)',
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
          tag: 'g',
          name: 'dots-layer',
          attrs: {
            id: 'dots',
          },
        },
        {
          tag: 'g',
          name: 'axes-layer',
          attrs: {
            id: 'axes',
          },
        },
        {
          tag: 'g',
          name: 'overflow-layer',
          attrs: {
            id: 'overflow',
          },
        },
        {
          tag: 'g',
          name: 'labels-layer',
          attrs: {
            id: 'labels',
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

interface Points {
  x: number;
  y: number;
}

class SplineDrawer {
  graph: Array<number>;
  points: Array<Points>;
  xArray: Array<number>;
  yArray: Array<number>;
  xMax: number;
  yMax: number;
  xMin: number;
  yMin: number;
  constructor(graph: Array<number>) {
    this.graph = graph;
    this.points = [];
    this.makePoints();
    this.xArray = [];
    this.yArray = [];
    console.log(this.points);
    this.points.forEach((element) => {
      this.xArray.push(element.x);
    });
    this.points.forEach((element) => {
      this.yArray.push(element.y);
    });

    this.xMax = Math.max(...this.xArray);
    this.xMin = Math.min(...this.xArray);
    this.yMax = Math.max(...this.yArray);
    this.yMin = Math.min(...this.yArray);
  }

  makePoints() {
    for (let i = 0; i < this.graph.length; i++) {
      this.points.push({ x: i * 50 + 20, y: this.graph[i] * 40 * -1 + 400 });
    }
    return this.points;
  }

  catmullRom2bezier(points: Array<Points>) {
    const result = [];
    for (let i = 0; i < points.length - 1; i++) {
      const p = [];

      p.push({
        x: points[Math.max(i - 1, 0)].x,
        y: points[Math.max(i - 1, 0)].y,
      });
      p.push({
        x: points[i].x,
        y: points[i].y,
      });
      p.push({
        x: points[i + 1].x,
        y: points[i + 1].y,
      });
      p.push({
        x: points[Math.min(i + 2, points.length - 1)].x,
        y: points[Math.min(i + 2, points.length - 1)].y,
      });

      // Catmull-Rom to Cubic Bezier conversion matrix
      //    0       1       0       0
      //  -1/6      1      1/6      0
      //    0      1/6      1     -1/6
      //    0       0       1       0

      const bp = [];
      bp.push({
        x: (-p[0].x + 6 * p[1].x + p[2].x) / 6,
        y: (-p[0].y + 6 * p[1].y + p[2].y) / 6,
      });
      bp.push({
        x: (p[1].x + 6 * p[2].x - p[3].x) / 6,
        y: (p[1].y + 6 * p[2].y - p[3].y) / 6,
      });
      bp.push({
        x: p[2].x,
        y: p[2].y,
      });
      result.push(bp);
    }
    return result;
  }

  makePath(points: Array<Points>) {
    let result = 'M' + points[0].x + ',' + points[0].y + ' ';
    const catmull = this.catmullRom2bezier(points);
    console.log(catmull);

    for (let i = 0; i < catmull.length; i++) {
      result +=
        'C' +
        catmull[i][0].x +
        ',' +
        catmull[i][0].y +
        ' ' +
        catmull[i][1].x +
        ',' +
        catmull[i][1].y +
        ' ' +
        catmull[i][2].x +
        ',' +
        catmull[i][2].y +
        ' ';
    }
    return result;
  }

  drawCircles() {
    const circles = [];
    for (var i = 0; i < this.points.length; i++) {
      const circle = {
        tag: 'circle',
        name: `circle${Math.random()}`,
        attrs: {
          cx: `${this.points[i].x}`,
          cy: `${this.points[i].y}`,
          r: `3`,
        },
      };
      circles.push(circle);
    }
    return circles;
  }

  drawXAxis() {
    const path = {
      tag: 'path',
      name: `xAxis${Math.random()}`,
      attrs: {
        d: `M${this.xMax} ${this.yMax} L ${this.xMin} ${this.yMax}`,
        stroke: 'black',
        fill: 'none',
        id: `xAxis`,
      },
    };
    return path;
  }

  drawXLabels() {
    const labels: any = [];
    this.xArray.forEach((element, i) => {
      const label = {
        tag: 'text',
        name: `text${Math.random()}`,
        attrs: {
          x: `${element}`,
          y: `${this.yMax + 20}`,
        },
        content: `${i + 1}`,
      };
      labels.push(label);
    });
    return labels;
  }
  calculateYValues() {
    const yValues = [];
    const len = Math.max(...this.graph) - Math.min(...this.graph);
    const part = 2;
    const stepY = len / part;
    for (let i = 0; i <= part; i++) {
      yValues[i] = Math.round(Math.max(...this.graph) - stepY * i);
    }
    return yValues;
  }

  drawYLabels(id: number) {
    const labels: any = [];
    const yValues = this.calculateYValues();
    const len = this.yMax - this.yMin;
    const step = len / 2;
    console.log(step);
    yValues.forEach((element, i) => {
      const label = {
        tag: 'text',
        name: `text${Math.random()}`,
        attrs: {
          x: `${this.xMin - 20}`,
          y: `${this.yMin + step * i}`,
          class: `${id}`,
        },
        content: `${element}`,
      };
      labels.push(label);
    });
    return labels;
  }

  drawYAxis() {
    const path = {
      tag: 'path',
      name: `xAxis${Math.random()}`,
      attrs: {
        d: `M${this.xMin} ${this.yMax} L ${this.xMin} ${this.yMin}`,
        stroke: 'black',
        fill: 'none',
        id: `yAxis`,
      },
    };
    return path;
  }

  draw(name: string, color: string, dashoffset: number, dasharray: number) {
    const path = {
      tag: 'path',
      name: `${name}`,
      attrs: {
        id: `${name}`,
        d: `${this.makePath(this.points)}`,
        stroke: `${color}`,
        fill: 'none',
        'stroke-dashoffset': `${dashoffset}`,
        'stroke-dasharray': `${dasharray}`,
      },
    };
    return path;
  }
}

function addSeries(series: Array<number>) {
  const spline = new SplineDrawer(series).draw('path1', 'black', 0, 0);
  const xAxis = new SplineDrawer(series).drawXAxis();
  const yAxis = new SplineDrawer(series).drawYAxis();
  const xLabels = new SplineDrawer(series).drawXLabels();
  const yLabels = new SplineDrawer(series).drawYLabels(1);
  const shapes = stage.find('shapes-layers');
  const overflow = stage.find('overflow-layer');
  const axes = stage.find('axes-layer');
  shapes.content = [...shapes.content, spline, ...xLabels];
  overflow.content = [...yLabels];
  axes.content = [xAxis, yAxis];
}

function addNewSeries(series: Array<number>) {
  const shapes1 = stage.find('dots-layer');
  const shapes = stage.find('shapes-layers');
  const spline2 = new SplineDrawer(series).draw('path2', 'green', 10000, 10000);
  const xLabels = new SplineDrawer(series).drawXLabels();
  const yLabels = new SplineDrawer(series).drawYLabels(2);
  //const circles = new SplineDrawer(series).drawCircles();
  shapes.content = [...shapes.content, ...xLabels, ...yLabels, spline2];
  shapes1.content = [...shapes1.content];
  stage.render();
}

const but = document.querySelector('button');
const data: Array<number> = [1, 3, 3, 4, 3, 2, 1, 3, 3];
// for (let i = 0; i < 9; i++) {
//   data.push(Math.random() * 5);
// }
addSeries(data);
const text = document.getElementById('root');
text?.classList.add('text');

but?.addEventListener('click', () => {
  const data2: Array<number> = [3, 2, 2, 4, 5, 2, 1, 2, 3, 6, 6, 4, 1, 3];
  //for (let i = 0; i < 9; i++) {
  //data2.push(Math.random() * 3 + 1);
  // }

  // for (let i = 0; i < 4; i++) {
  //   data.push(Math.random() * 5);
  // }

  addNewSeries(data2);
  const overflow = document.getElementById('overflow');
  const path2 = document.getElementById('path2');
  path2?.classList.add('lineAnimate');
  overflow?.classList.add('overflow');
  const path1 = document.getElementById('shapes');
  //path2?.classList.add('axAnimate');
  path1?.classList.add('scale');
});
stage.render();
