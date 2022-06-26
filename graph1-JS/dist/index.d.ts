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
declare const rects: any[];
declare const shapes: any;
declare const button: HTMLButtonElement | null;
declare let height: number;
declare let v: number;
declare const container: HTMLElement;
declare const body: HTMLElement;
declare const divHeight: number;
declare function addAnimation(): void;
