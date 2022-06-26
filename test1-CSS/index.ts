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
const recte = document.querySelector('path');

function addAnimation():void{
  recte?.classList.add('anirect');
}
function removeAnimation():void{
  if(recte?.classList.contains('anirect')){
    recte?.classList.remove('anirect');
    recte!.style.fill = 'black';
    recte!.style.stroke = 'black';
  }
}
function addAnimationEvent(event: string):void{
  recte?.addEventListener(event, addAnimation);
}
function removeAnimationEvent(event: string):void{
  recte?.addEventListener(event, removeAnimation);
}

addAnimationEvent('click');
removeAnimationEvent('mouseout');
