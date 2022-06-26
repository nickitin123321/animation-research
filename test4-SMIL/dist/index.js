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
                            name: 'rect',
                            attrs: {
                                width: '100',
                                height: '100'
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
const path = stage.find('rect');
const animate = {
    tag: 'animate',
    name: 'animate-rect',
    attrs: {
        attributeName: 'width',
        dur: '3s',
        repeatCount: '1',
        values: '100; 0; 100',
    }
};
const animate1 = {
    tag: 'animate',
    name: 'animate-rect1',
    attrs: {
        attributeName: 'height',
        begin: '3s',
        dur: '3s',
        repeatCount: '1',
        values: '100; 0; 100',
    }
};
path.content = [
    animate,
    animate1
];
stage.render();
//# sourceMappingURL=index.js.map