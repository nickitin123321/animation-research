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
                    content: [
                        {
                            tag: 'path',
                            name: 'path',
                            attrs: {
                                id: 'path',
                                d: `  M 302.45804332003877 421.99999572727427 A 206 206 0 0 1 302.2138701327572 10.000198714418474 L 302.44277402655143 174.80003974288368 A 41.2 41.2 0 0 0 302.49160866400774 257.19999914545485 Z
                M 302.45804332003877 10.00000427272576 A 206 206 0 0 1 480.96287508123993 318.89315923684023 L 338.192575016248 236.57863184736806 A 41.2 41.2 0 0 0 302.49160866400774 174.80000085454515 Z
                M 480.8598927077218 319.0715706356023 A 206 206 0 0 1 302.6640433024111 421.9999346839579 L 302.5328086604822 257.19998693679156 A 41.2 41.2 0 0 0 338.1719785415444 236.61431412712045 Z`,
                                fill: 'green',
                                stroke: 'white',
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