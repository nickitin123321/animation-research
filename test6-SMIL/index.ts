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
            tag: 'polygon',
            name: 'triangle',
            attrs:{
              points: '60,30 90,90 30,90'
            }
          },        
  ],
};

//@ts-ignore
const stage = acg.create(config); 
stage.container = document.getElementById('container');
stage.render();

const triangle = stage.find('triangle');
const animate = {
  tag: 'animateTransform',
  name: 'animate-triangle',
  attrs: {
    attributeName: 'transform',
    type:'rotate',
    from: '0 60 70',
    to: '360 60 70',
    dur: '10s',
    repeatCount: 'indefinite'
  },
};
triangle.content = [
  animate
];
stage.render();

// <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
//   <polygon points="60,30 90,90 30,90">
//     <animateTransform
//       attributeName="transform"
//       attributeType="XML"
//       type="rotate"
//       from="0 60 70"
//       to="360 60 70"
//       dur="10s"
//       repeatCount="indefinite"
//     />
//   </polygon>
// </svg>
