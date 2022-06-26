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
        content: {
            tag: string;
            name: string;
            content: {
                tag: string;
                name: string;
                attrs: {
                    fill: string;
                    stroke: string;
                    'stroke-opacity': string;
                    width: string;
                    height: string;
                    x: string;
                    y: string;
                };
            }[];
        }[];
    }[];
};
declare const stage: any;
declare const svg: SVGSVGElement | null;
declare const width: number | undefined;
declare const height: number | undefined;
declare let coordX: number;
declare let coordY: number;
declare const v = 5;
declare let coordX2: number;
declare let coordY2: number;
declare const object: SVGRectElement | null;
declare function step(t: number): void;
