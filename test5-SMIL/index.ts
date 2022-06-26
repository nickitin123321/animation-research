const config = {
  tag: 'svg',
  name: 'Svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 200 100',
    width: '500',
    height: '350'
  },
  content: [
            {
            tag: 'path',
            name: 'circle-animate',
            attrs:{
              id: 'motionPath',
              d: 'M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z',
              stroke: 'lightgrey',
              fill: 'none'
            }
          },
          {
            tag: 'circle',
            name: 'orange-circle',
            attrs: {
              r: '5',
              fill: 'orange',
            },
          },          
  ],
};

//@ts-ignore
const stage = acg.create(config); 
stage.container = document.getElementById('container');
stage.render();
const circle = stage.find('orange-circle');
const animate = {
  tag: 'animateMotion',
  name: 'animate-circle',
  attrs: {
    dur: '11s',
    repeatCount: 'indefinite' 
  },
  content:[
    {
    tag: 'mpath',
    name: 'mpath',
    attrs:{
      'href' : '#motionPath'
    }
  }
  ]
};
circle.content = [
  animate
];
stage.render();
