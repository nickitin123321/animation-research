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
declare const rects: any[];
declare const animations: any[];
declare const shapes: any;
declare const startButton: {
    tag: string;
    name: string;
    attrs: {
        id: string;
        style: string;
        x: string;
        y: string;
        height: string;
        width: string;
        fill: string;
        stroke: string;
    };
};
declare const text: {
    tag: string;
    name: string;
    attrs: {
        x: string;
        y: string;
        'text-anchor': string;
        style: string;
    };
};
declare const textNode: SVGTextElement;
