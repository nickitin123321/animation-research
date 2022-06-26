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
                    attrs: {
                        id: 'shapes',
                    },
                },
            ],
        },
    ],
};
const stage = acg.create(config);
stage.container = document.getElementById('container');
stage.render();
const shapes = stage.find('shapes-layers');
const rect = {
    tag: 'path',
    name: `path`,
    attrs: {
        d: 'M 100 100 200 500 300 200 400 400 500 600 600 200 700 300 ',
        stroke: 'black',
        fill: 'none',
    },
};
shapes.content = [rect];
stage.render();
const svg = document.querySelector('svg');
svg.style.width = '0';
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => svg === null || svg === void 0 ? void 0 : svg.classList.add('anirect'));
//# sourceMappingURL=index.js.map