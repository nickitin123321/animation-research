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
const path = document.querySelector('path');
const len = path === null || path === void 0 ? void 0 : path.getTotalLength();
let x = len;
let v = 5;
path.style.strokeDasharray = `${x}`;
path.style.strokeDashoffset = `${x}`;
function animate(w, vw) {
    w -= vw;
    path.style.strokeDashoffset = `${w}`;
    const id = requestAnimationFrame(() => animate(w, vw));
    if (w <= 0) {
        console.log(id);
        cancelAnimationFrame(id);
    }
}
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => animate(x, v));
//# sourceMappingURL=index.js.map