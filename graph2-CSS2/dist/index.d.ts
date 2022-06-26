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
declare const line: {
    tag: string;
    name: string;
    attrs: {
        d: string;
        stroke: string;
        fill: string;
        'stroke-dasharray': string;
        'stroke-dashoffset': string;
    };
};
declare const path: SVGPathElement | null;
declare const len: number | undefined;
declare const button: HTMLButtonElement | null;
