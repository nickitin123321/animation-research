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
                id: 'path',
                d: `M 239.5 172.53229813664598A 195.46770186335402 195.46770186335402 0 0 1 423.2283290042868 434.7197391559169L 239.5 368 Z
                  M 436.8191916977546 439.65517191539567A 209.92695652173913 209.92695652173913 0 0 1 187.61408276674518 571.413811397712L 239.5 368 Z
                  M 192.0151203892088 554.159961323799A 192.12065217391304 192.12065217391304 0 0 1 53.03197341757925 414.26035077890475L 239.5 368 Z
                  M 30.291970175820666 419.9018569714543A 215.55 215.55 0 0 1 239.49999999999977 152.45L 239.5 368 Z`,
                fill: 'green',
                stroke: 'white',
                transform: 'translate(150 -100)',
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
