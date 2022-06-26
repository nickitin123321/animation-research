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
        transform: 'scale(0.8)',
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
const rects = [];
const shapes = stage.find('shapes-layers');
for (let i = 0; i <= 7; i++) {
    const rect = {
        tag: 'rect',
        name: `rect${i}`,
        attrs: {
            width: '100',
            height: `${i * 100}`,
            x: `${250 * i}`,
            y: `${800 - i * 100}`,
            'fill-opacity': `${i * 0.1}`,
            fill: 'green',
            id: 'id',
        },
    };
    rects.push(rect);
}
shapes.content = [...rects];
stage.render();
const bars = document.getElementById('shapes');
Array.from(bars === null || bars === void 0 ? void 0 : bars.children).forEach((bar) => bar.classList.add('anirect'));
const button = document.querySelector('button');
//# sourceMappingURL=index.js.map