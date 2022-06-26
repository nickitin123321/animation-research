declare const config: {
    tag: string;
    name: string;
    attrs: {
        xmlns: string;
        viewBox: string;
        width: string;
        height: string;
    };
    content: ({
        tag: string;
        name: string;
        attrs: {
            id: string;
            d: string;
            stroke: string;
            fill: string;
            r?: undefined;
        };
    } | {
        tag: string;
        name: string;
        attrs: {
            r: string;
            fill: string;
            id?: undefined;
            d?: undefined;
            stroke?: undefined;
        };
    })[];
};
declare const stage: any;
declare const circle: any;
declare const animate: {
    tag: string;
    name: string;
    attrs: {
        dur: string;
        repeatCount: string;
    };
    content: {
        tag: string;
        name: string;
        attrs: {
            href: string;
        };
    }[];
};
