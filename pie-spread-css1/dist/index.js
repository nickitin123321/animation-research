"use strict";
const config = {
    tag: 'svg',
    name: 'Svg',
    attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        border: 0,
        width: '1200px',
        height: '750px',
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
                        opacity: '1',
                        stroke: 'black',
                        transform: 'translate(300 -100)',
                        'fill-opacity': '1',
                    },
                    content: [
                        {
                            tag: 'path',
                            name: 'path4',
                            attrs: {
                                id: 'path4',
                                d: `M 263 450 L 35.30000000000001 450 A 227.7 227.7 0 0 1 262.99999999999994 222.3 Z`,
                                fill: 'orange',
                                'transform-origin': `263 450`,
                            },
                        },
                        {
                            tag: 'path',
                            name: 'path3',
                            attrs: {
                                id: 'path3',
                                d: ` 
                M 263 450 L 263 677.7 A 227.7 227.7 0 0 1 35.30000000000001 450.00000000000006 Z`,
                                fill: 'yellow',
                                'transform-origin': `263 450`,
                            },
                        },
                        {
                            tag: 'path',
                            name: 'path2',
                            attrs: {
                                id: 'path2',
                                d: `
                M 263 450 L 490.7 450 A 227.7 227.7 0 0 1 263 677.7 Z `,
                                fill: 'red',
                                'transform-origin': `263 450`,
                            },
                        },
                        {
                            tag: 'path',
                            name: 'path1',
                            attrs: {
                                id: 'path1',
                                d: `M 263 450 L 263 222.3 A 227.7 227.7 0 0 1 490.7 450 Z`,
                                fill: 'green',
                                'transform-origin': `263 450`,
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
function spread() {
    const slices = document.getElementById('shapes');
    Array.from(slices === null || slices === void 0 ? void 0 : slices.children).forEach((slice, i) => {
        slice === null || slice === void 0 ? void 0 : slice.classList.add(`morph${3 - i}`);
    });
}
function freeze(event) {
    const ev = event.target;
    if (ev.tagName != 'path')
        return;
    if (ev.classList.contains('freeze')) {
        ev.classList.remove('freeze');
    }
    else {
        ev.classList.remove(`${ev.className['baseVal']}`);
        ev.classList.add('anirect');
    }
}
function removeAnimate(event) {
    const ev = event.target;
    if (ev.classList.contains('anirect')) {
        ev.classList.remove('anirect');
        ev.classList.add('anirectr');
    }
}
document.addEventListener('animationend', () => {
    const div = document.getElementById('container');
    div === null || div === void 0 ? void 0 : div.addEventListener('mouseover', freeze);
    div === null || div === void 0 ? void 0 : div.addEventListener('mouseout', removeAnimate);
});
window.addEventListener('load', spread);
//# sourceMappingURL=index.js.map