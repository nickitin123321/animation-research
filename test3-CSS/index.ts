const config = {
  tag: 'svg',
  name: 'Svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '100%',
    height: '100%'
  },
  content: [
            {
              tag: 'circle',
              name: 'orange-rect',
              attrs: {
                id: 'go',
                r: '30',
                cx: '50',
                cy: '95%',
                fill: 'orange',
              },
             },
             {
               tag:'path',
               name: 'wall',
               attrs:{
                 d: 'M 680 700 680 960',
                 stroke: 'black'
               }
             }
  ],
};

//@ts-ignore
const stage = acg.create(config); 
stage.container = document.getElementById('container');
stage.render();

const circle = document.getElementById('go');
document.addEventListener('click', addClass)
function addClass(){
  if (circle?.classList.contains('anicirclee')){
    circle?.classList.remove('anicirclee');
  }
  else{
    circle?.classList.add('anicirclee')
  }
}