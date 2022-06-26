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
                    x: number;
                    y: number;
                    width: string;
                    height: string;
                };
            }[];
        }[];
    }[];
};
declare const stage: any;
declare const recte: any;
declare const animate: {
    tag: string;
    name: string;
    attrs: {
        attributeName: string;
        from: string;
        to: string;
        dur: string;
        begin: string;
    };
};
