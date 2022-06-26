declare const config: {
    tag: string;
    name: string;
    attrs: {
        id: string;
        xmlns: string;
        width: string;
        height: string;
    };
    content: {
        tag: string;
        name: string;
        attrs: {
            x: string;
            y: string;
            id: string;
            fill: string;
            stroke: string;
            width: string;
            height: string;
        };
    }[];
};
declare const stage: any;
declare const recte: HTMLElement | null;
declare const svg: HTMLElement | null;
declare function addAnimation(): void;
