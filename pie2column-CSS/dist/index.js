"use strict";
const config = {
    tag: 'svg',
    name: 'Svg',
    attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        border: 0,
        width: '800px',
        height: '550px',
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
                 M 120 600
                 A 1 100 0 0 1  120 100
                 L 200 100
                 A 1 100 0 0 0  200 600 z
                 
                 M 400 600
                 A 1 100 0 0 1    400 300 
                 L   480 300
                 A 1 100 0 0 0    480 600 z

                 M  760 400
                 A 1 100 0 0 1 760 600
                 L  680 600
                 A 1 100 0 0 0  680 400 z
                 `,
                                fill: 'green',
                                stroke: 'white',
                                id: 'path',
                                transform: 'scale(0.8) translate(40 20)',
                                'fill-rule': 'nonzero',
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
const stage = acg.create(config);
stage.container = document.getElementById('container');
stage.render();
const but = document.querySelector('button');
const p = document.getElementById('path');
but === null || but === void 0 ? void 0 : but.addEventListener('click', () => {
    if (p === null || p === void 0 ? void 0 : p.classList.contains('morph')) {
        p === null || p === void 0 ? void 0 : p.classList.remove('morph');
        p === null || p === void 0 ? void 0 : p.classList.add('morphr');
    }
    else {
        p === null || p === void 0 ? void 0 : p.classList.remove('morphr');
        p === null || p === void 0 ? void 0 : p.classList.add('morph');
    }
});
//# sourceMappingURL=index.js.map