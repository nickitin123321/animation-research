const config = {
  tag: 'svg',
  name: 'Svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    border: 0,
    width: '600px',
    height: '450px',
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
          },
          content: [
            {
              tag: 'path',
              name: 'path',
              attrs: {
                id: 'path',
                d: ` M 405 252 L 275.4 252.00000000000003 A 129.6 129.6 0 0 1 405 122.4 Z
                M 405 252 L 405 122.4 A 129.6 129.6 0 0 1 534.6 252 Z 
                M 405 252 L 534.6 252 A 129.6 129.6 0 0 1 405 381.6 Z
                M 405 252 L 405 381.6 A 129.6 129.6 0 0 1 275.4 252.00000000000006 Z`,
                fill: 'green',
                stroke: 'white',
                transform: 'translate(-180 -100) scale(1.2)',
              },
            },
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
const but = document.querySelector('button');
const p = document.getElementById('path');
but?.addEventListener('click', () => {
  if (p?.classList.contains('morph')) {
    p?.classList.remove('morph');
    p?.classList.add('morphr');
  } else {
    p?.classList.remove('morphr');
    p?.classList.add('morph');
  }
});
