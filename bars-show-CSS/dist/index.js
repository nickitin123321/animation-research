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
            fill: 'red',
            id: 'id',
            transform: 'scale(0.6)',
        },
    };
    rects.push(rect);
}
shapes.content = [...rects];
stage.render();
const bars = document.getElementById('shapes');
bars === null || bars === void 0 ? void 0 : bars.classList.add('anirect');
//# sourceMappingURL=index.js.map