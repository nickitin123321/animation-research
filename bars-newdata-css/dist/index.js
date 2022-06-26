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
        transform: 'scale(1 -1)',
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
                        transform: 'scale(0.3)',
                    },
                },
            ],
        },
    ],
};
const stage = acg.create(config);
stage.container = document.getElementById('container');
stage.render();
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
drawRects(data);
stage.render();
function drawRects(data) {
    const rects = [];
    const shapes = stage.find('shapes-layers');
    data.forEach((element, i) => {
        const rect = {
            tag: 'rect',
            name: `rect${i}`,
            attrs: {
                width: '100',
                height: `${100 * element}`,
                x: `${220 * i + 100}`,
                y: `${100}`,
                fill: '#1976d2',
                id: `id${i}`,
            },
        };
        rects.push(rect);
    });
    shapes.content = [...rects];
}
function shiftBars() {
    const bars = document.getElementById('shapes');
    Array.from(bars === null || bars === void 0 ? void 0 : bars.children).forEach((bar, i) => {
        bar.classList.remove(`anirect${i}`);
        bar.classList.add(`anirect${i}`);
    });
}
function genStyle(newHeight, oldHeight) {
    const style = document.createElement('style');
    let keyFrames = '';
    newHeight.forEach((height, i) => {
        keyFrames += `
  .anirect${i} {
    animation: recte${i} 1s linear 1;
    animation-fill-mode: forwards;
  }

  @keyframes recte${i} {
    0% {
      height: ${oldHeight[i]}px;
    }

    100% {
      height: ${height}px;
    }
  }

  `;
    });
    style.innerHTML = keyFrames;
    document.head.appendChild(style);
}
const but = document.querySelector('button');
but === null || but === void 0 ? void 0 : but.addEventListener('click', () => {
    const input = document.getElementById('input');
    const d = input === null || input === void 0 ? void 0 : input.value.split(' ');
    const data1 = d.map((el) => +el);
    const oldHeight = [];
    const newHeight = [];
    data.forEach((element) => {
        oldHeight.push(element * 100);
    });
    data1.forEach((element) => {
        newHeight.push(element * 100);
    });
    if (data1.length > data.length) {
        drawRects(data1);
        for (let i = 0; i < data1.length - data.length; i++) {
            oldHeight.push(0);
        }
        genStyle(newHeight, oldHeight);
        stage.render();
        shiftBars();
    }
    else {
        genStyle(newHeight, oldHeight);
        shiftBars();
        if (data1.length < data.length) {
            for (let i = 0; i < data.length - data1.length; i++) {
                newHeight.push(0);
            }
            genStyle(newHeight, oldHeight);
            stage.render();
            shiftBars();
        }
    }
    console.log(oldHeight);
    console.log(newHeight);
});
//# sourceMappingURL=index.js.map