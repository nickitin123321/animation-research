const config = {
  tag: 'svg',
  name: 'Svg',
  attrs: {
    id: 'translate',
    xmlns: 'http://www.w3.org/2000/svg',
    width: '150px',
    height: '150px'
  },
  content: [
            {
              tag: 'rect',
              name: 'Red-rect',
              attrs: {
                x: '25',
                y: '25',
                id: 'rectrot',
                fill: 'black',
                stroke: '#000',
                width: '100px',
                height: '100px'
              },
    },
  ],
};

//@ts-ignore
const stage = acg.create(config); 
stage.container = document.getElementById('container');

stage.render();
const recte = document.getElementById('rectrot');
const svg = document.getElementById('translate');

function addAnimation(){
  if (recte?.classList.contains('anirect')){
    recte?.classList.remove('anirect');
    svg?.classList.remove('svg');
  }
  else{
    recte?.classList.add('anirect');
    svg?.classList.add('svg');
  }
}

recte?.addEventListener('click', addAnimation);
