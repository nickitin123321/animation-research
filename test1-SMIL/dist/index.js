"use strict";
const config = {
    tag: 'svg',
    name: 'Svg',
    attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '500',
        height: '350'
    },
    content: [
        {
            tag: 'circle',
            name: 'orange-rect',
            attrs: {
                r: '30',
                cx: '50',
                cy: '50',
                fill: 'orange',
            },
            content: [
                {
                    tag: 'animate',
                    name: 'circle-animate',
                    attrs: {
                        attributeName: 'cx',
                        from: '50',
                        to: '450',
                        dur: '4s',
                        begin: 'click',
                        repeatCount: '1',
                        fill: 'remove'
                    }
                }
            ]
        },
    ],
};
const stage = acg.create(config);
stage.container = document.getElementById('container');
stage.render();
//# sourceMappingURL=index.js.map