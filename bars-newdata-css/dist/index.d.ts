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
                transform: string;
            };
        }[];
    }[];
};
declare const stage: any;
declare const data: number[];
declare function drawRects(data: Array<number>): void;
declare function shiftBars(): void;
declare function genStyle(newHeight: Array<number>, oldHeight: Array<number>): void;
declare const but: HTMLButtonElement | null;
