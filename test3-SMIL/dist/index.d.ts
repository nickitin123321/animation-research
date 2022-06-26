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
                    d: string;
                    fill: string;
                };
            }[];
        }[];
    }[];
};
declare const stage: any;
declare const path: any;
declare const animate: {
    tag: string;
    name: string;
    attrs: {
        attributeName: string;
        dur: string;
        repeatCount: string;
        begin: string;
        values: string;
    };
};
