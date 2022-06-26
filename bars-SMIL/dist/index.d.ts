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
        content: ({
            tag: string;
            name: string;
            attrs: {
                id: string;
                transform: string;
            };
        } | {
            tag: string;
            name: string;
            attrs: {
                id: string;
                transform?: undefined;
            };
        })[];
    }[];
};
declare const stage: any;
declare const rects: any[];
declare const animations: any[];
declare const shapes: any;
declare const buttonLayer: any;
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
declare const shps: any;
declare const rects1: any[];
declare const animations1: any[];
declare const animate1: {
    tag: string;
    name: string;
    attrs: {
        attributeName: string;
        begin: string;
        from: string;
        to: string;
        dur: string;
        id: string;
        fill: string;
        href: string;
    };
};
declare const animates: any[];
