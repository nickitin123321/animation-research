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
        transform: string;
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
declare function addRect(): void;
declare function shiftBars(): void;
declare const but: HTMLButtonElement | null;
