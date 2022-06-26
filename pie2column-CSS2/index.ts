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
          name: 'shapes-layers',
          content: [
            {
              tag: 'path',
              name: 'path',
              attrs: {
                d: `
                 M 800 500 
                 A 1 100 0 0 1 800 800
                 L 620 800
                 A 1 100 0 0 0 620 500 z

                 M 220 800
                 A 1 100 0 1 1  220 300
                 L 400 300
                 A 1 100 0 1 0  400 800 z
                 `,
                fill: 'green',
                stroke: 'white',
                id: 'path',
                transform: 'translate(200)',
              },
            },
          ],
        },
      ],
    },
  ],
};

// M 359.75594694003814 597.1596817143093
// A 194.85 194.85 0 0 1 45.640910208735335 382.4981921613311
// L 172.2422730626206 433.24945764839936
// A 58.455 58.455 0 0 0 266.4767840820115 497.6479045142928 Z

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
