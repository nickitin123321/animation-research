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
const animations = [];
const shapes = stage.find('shapes-layers');
for (let i = 1; i <= 7; i += 1) {
    const rect = {
        tag: 'rect',
        name: `rect${i}`,
        attrs: {
            width: '100',
            height: '0',
            x: `${250 * i}`,
            y: `${0}`,
            id: `${i}`,
        },
    };
    rects.push(rect);
}
const startButton = {
    tag: 'rect',
    name: `startButton`,
    attrs: {
        id: 'startButton',
        style: 'cursor:pointer;',
        x: '0',
        y: '0',
        height: '50px',
        width: '100px',
        fill: '#EFEFEF',
        stroke: 'black',
    },
};
const text = {
    tag: 'text',
    name: `text`,
    attrs: {
        x: '50',
        y: '30',
        'text-anchor': 'middle',
        style: 'pointer-events:none;',
    },
};
for (let i = 1; i <= 7; i++) {
    const animate = {
        tag: 'animate',
        name: `graph-animate ${i}`,
        attrs: {
            attributeName: 'height',
            begin: 'startButton.click',
            from: '0',
            to: `${i * 100}`,
            dur: '2s',
            fill: 'freeze',
            href: `#${i}`,
        },
    };
    animations.push(animate);
}
shapes.content = [...rects, startButton, ...animations, text];
stage.render();
const textNode = document.querySelector('text');
textNode.textContent = 'animate';
//# sourceMappingURL=index.js.map