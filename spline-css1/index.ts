const config = {
  tag: 'svg',
  name: 'Svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    border: 0,
    width: '1000px',
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
        transform: 'scale(2) translate(40 -150)',
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

  makeContolPoints(points: Array<Points>) {
    const result = [];
    for (let i = 0; i < points.length - 1; i++) {
      result.push({
        x: (points[i].x + points[i + 1].x) / 2,
        y: points[i].y,
      });
      result.push({
        x: (points[i].x + points[i + 1].x) / 2,
        y: points[i + 1].y,
      });
      result.push({
        x: points[i + 1].x,
        y: points[i + 1].y,
      });
    }

    return result;
  }

  makePath(points: Array<Points>) {
    const M = `M${points[0].x}, ${points[0].y}`;
    const controlPoints = this.makeContolPoints(points);
    let curve = ``;
    for (let i = 0; i < controlPoints.length; i += 3) {
      curve += `C ${controlPoints[i].x} ${controlPoints[i].y} ${controlPoints[i + 1].x} ${
        controlPoints[i + 1].y
      } ${controlPoints[i + 2].x}  ${controlPoints[i + 2].y} `;
    }

    const path = M + curve;
    return path;
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
  shapes.content = [...shapes.content, ...xLabels, ...yLabels, spline2];
  shapes1.content = [...shapes1.content];
  stage.render();
}

const but = document.querySelector('button');
const data: Array<number> = [1, 3, 2, 4, 3, 4, 2, 3, 3];
addSeries(data);
const text = document.getElementById('root');
text?.classList.add('text');

but?.addEventListener('click', () => {
  const data2: Array<number> = [3, 5, 2, 4, 2, 5, 1, 3, 3, 6, 1, 3, 2, 3];
  addNewSeries(data2);
  const overflow = document.getElementById('overflow');
  const path2 = document.getElementById('path2');
  path2?.classList.add('lineAnimate');
  overflow?.classList.add('overflow');
  const path1 = document.getElementById('shapes');
  path1?.classList.add('scale');
});
stage.render();
