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
                            tag: 'rect',
                            name: 'Red-rect',
                            attrs: {
                                fill: 'red',
                                stroke: 'red',
                                x: 0,
                                y: 0,
                                width: '100px',
                                height: '100px'
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
const recte = stage.find('Red-rect');
const animate = {
    tag: 'animate',
    name: 'animate-rect',
    attrs: {
        attributeName: 'x',
        from: '0',
        to: '450',
        dur: '4s',
        begin: 'click',
    },
};
recte.content = [
    animate
];
stage.render();
//# sourceMappingURL=index.js.map