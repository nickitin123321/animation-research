"use strict";
const config = {
    tag: 'svg',
    name: 'Svg',
    attrs: {
        id: 'translate',
        xmlns: 'http://www.w3.org/2000/svg',
        width: '150px',
        height: '150px'
    },
    content: [
        {
            tag: 'rect',
            name: 'Red-rect',
            attrs: {
                x: '25',
                y: '25',
                id: 'rectrot',
                fill: 'black',
                stroke: '#000',
                width: '100px',
                height: '100px'
            },
        },
    ],
};
const stage = acg.create(config);
stage.container = document.getElementById('container');
stage.render();
const recte = document.getElementById('rectrot');
const svg = document.getElementById('translate');
function addAnimation() {
    if (recte === null || recte === void 0 ? void 0 : recte.classList.contains('anirect')) {
        recte === null || recte === void 0 ? void 0 : recte.classList.remove('anirect');
        svg === null || svg === void 0 ? void 0 : svg.classList.remove('svg');
    }
    else {
        recte === null || recte === void 0 ? void 0 : recte.classList.add('anirect');
        svg === null || svg === void 0 ? void 0 : svg.classList.add('svg');
    }
}
recte === null || recte === void 0 ? void 0 : recte.addEventListener('click', addAnimation);
//# sourceMappingURL=index.js.map