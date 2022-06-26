"use strict";
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