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
                                d: 'M 0,0 C 50,0 50,0 100,0  100,50 100,50 100,100  50,100 50,100 0,100  0,50 0,50 0,0 Z;',
                                fill: 'red',
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
const path = stage.find('path');
const animate = {
    tag: 'animate',
    name: 'morphing',
    attrs: {
        attributeName: 'd',
        dur: '10s',
        repeatCount: '1',
        begin: 'click',
        values: ' M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100 50,100 50,100 0,100  0,50 0,50 0,0  Z; M 50,0 C 75,25 75,25 100,50  75,75 75,75 50,100  25,75 25,75 0,50  25,25 25,25 50,0 Z; M 25,50 C 37.5,25 37.5,25 50,0   75,50 75,50 100,100 50,100 50,100 0,100  12.5,75 12.5,75 25,50 Z; M 25,50 C 37.5,25 37.5,25 50,0 75,50 75,50 100,100 50,100 50,100 0,100 12.5,75 12.5,75 25,50 Z; M 50,0 C 77.6,0 100,22.4 100,50 100,77.6 77.6,100 50,100 22.4,100, 0,77.6, 0,50 0,22.4, 22.4,0, 50,0 Z;  M 50,0  C 77.6,0 100,22.4 100,50  100,77.6 77.6,100 50,100  22.4,100, 0,77.6, 0,50   0,22.4, 22.4,0, 50,0 Z;  M 100,0 C 100,50 100,50 100,100 50,100 50,100 0,100  0,50 0,50 0,0  50,0 50,0 100,0 Z;',
    },
};
path.content = [animate];
stage.render();
//# sourceMappingURL=index.js.map