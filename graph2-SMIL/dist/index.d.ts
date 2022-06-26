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
            content: {
                tag: string;
                name: string;
                attrs: {
                    d: string;
                    stroke: string;
                    fill: string;
                    'stroke-dasharray': string;
                    'stroke-dashoffset': string;
                    id: string;
                };
            }[];
        }[];
    }[];
};
declare const stage: any;
declare const shapes: any;
declare const animate: {
    tag: string;
    name: string;
    attrs: {
        attributeName: string;
        begin: string;
        fill: string;
        dur: string;
        from: string;
        to: string;
        href: string;
    };
};
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
    content: string;
};
