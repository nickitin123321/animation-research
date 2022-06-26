declare const config: {
    tag: string;
    name: string;
    attrs: {
        xmlns: string;
        width: string;
        height: string;
    };
    content: {
        tag: string;
        name: string;
        attrs: {
            r: string;
            cx: string;
            cy: string;
            fill: string;
        };
        content: {
            tag: string;
            name: string;
            attrs: {
                attributeName: string;
                from: string;
                to: string;
                dur: string;
                begin: string;
                repeatCount: string;
                fill: string;
            };
        }[];
    }[];
};
declare const stage: any;
