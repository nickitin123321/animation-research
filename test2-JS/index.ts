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
          name: 'shapes layers',
          content: [
            {
              tag: 'path',
              name: 'Red-rect',
              attrs: {
                id: 'rect',
                fill: 'red',
                stroke: '#f00',
                'stroke-opacity': '100%',
                d: 'M 10 10 H 90 V 90 H 10 L 10 10'
              },
            },
            {
              tag:'path',
              name:'rect-container',
              attrs:{
                fill:'none',
                stroke: 'black',
                id: 'ani',
                d:'M 10 10 10 690 690 690 690 10 10 10'
              }
            }
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
const rect = document.getElementById('rect')
const input = document.getElementById('inputX');
const button = document.getElementById('but');

let x = 0;
let s = 0;
const t = 100;
button?.addEventListener('click', () => {
  window.requestAnimationFrame(translateX);
});

function translateX() {  
   //@ts-ignore
  s = input?.value;
  x += +s/t;
  console.log(x);
  rect?.setAttribute('transform', `translate(${x})`);
  const id = window.requestAnimationFrame(translateX);
  if(x>s){
    window.cancelAnimationFrame(id);
  }
}
