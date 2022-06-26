declare const config: {
    tag: string;
    name: string;
    attrs: {
        xmlns: string;
        border: number;
        transform: string;
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
declare const shapes: any;
declare const bars: HTMLElement | null;
