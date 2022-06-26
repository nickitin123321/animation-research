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
for (let i = 1; i <= 7; i++) {
    const rect = {
        tag: 'rect',
        name: `rect${i}`,
        attrs: {
            width: '100',
            height: `${i * 100}`,
            x: `${250 * i}`,
        },
    };
    rects.push(rect);
}
shapes.content = [...rects];
stage.render();
const cont = document.getElementById('container');
const button = document.querySelector('button');
cont.style.height = '0%';
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    if (cont === null || cont === void 0 ? void 0 : cont.classList.contains('anirect')) {
        cont === null || cont === void 0 ? void 0 : cont.classList.remove('anirect');
    }
    else {
        cont === null || cont === void 0 ? void 0 : cont.classList.add('anirect');
    }
});
//# sourceMappingURL=index.js.map