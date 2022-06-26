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
            attrs: {
                id: string;
            };
        }[];
    }[];
};
declare const stage: any;
declare const shapes: any;
declare const rect: {
    tag: string;
    name: string;
    attrs: {
        d: string;
        stroke: string;
        fill: string;
    };
};
declare const path: SVGPathElement;
declare const len: number;
declare let x: number;
declare let v: number;
declare function animate(w: number, vw: number): void;
declare const button: HTMLButtonElement | null;
