declare const config: {
    tag: string;
    name: string;
    attrs: {
        xmlns: string;
        border: number;
        width: string;
        height: string;
        class: string;
        style: string;
    };
    content: {
        tag: string;
        name: string;
        attrs: {
            id: string;
            transform: string;
        };
        content: {
            tag: string;
            name: string;
            attrs: {
                id: string;
            };
        }[];
    }[];
};
declare const stage: any;
interface Points {
    x: number;
    y: number;
}
declare class SplineDrawer {
    graph: Array<number>;
    points: Array<Points>;
    xArray: Array<number>;
    yArray: Array<number>;
    xMax: number;
    yMax: number;
    xMin: number;
    yMin: number;
    constructor(graph: Array<number>);
    makePoints(): Points[];
    catmullRom2bezier(points: Array<Points>): {
        x: number;
        y: number;
    }[][];
    makePath(points: Array<Points>): string;
    drawCircles(): {
        tag: string;
        name: string;
        attrs: {
            cx: string;
            cy: string;
            r: string;
        };
    }[];
    drawXAxis(): {
        tag: string;
        name: string;
        attrs: {
            d: string;
            stroke: string;
            fill: string;
            id: string;
        };
    };
    drawXLabels(): any;
    calculateYValues(): number[];
    drawYLabels(id: number): any;
    drawYAxis(): {
        tag: string;
        name: string;
        attrs: {
            d: string;
            stroke: string;
            fill: string;
            id: string;
        };
    };
    draw(name: string, color: string, dashoffset: number, dasharray: number): {
        tag: string;
        name: string;
        attrs: {
            id: string;
            d: string;
            stroke: string;
            fill: string;
            'stroke-dashoffset': string;
            'stroke-dasharray': string;
        };
    };
}
declare function addSeries(series: Array<number>): void;
declare function addNewSeries(series: Array<number>): void;
declare const but: HTMLButtonElement | null;
declare const data: Array<number>;
declare const text: HTMLElement | null;
