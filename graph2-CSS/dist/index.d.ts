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
declare const svg: SVGSVGElement;
declare const button: HTMLButtonElement | null;
