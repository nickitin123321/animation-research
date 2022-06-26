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
            content: ({
                tag: string;
                name: string;
                attrs: {
                    id: string;
                    fill: string;
                    stroke: string;
                    'stroke-opacity': string;
                    d: string;
                };
            } | {
                tag: string;
                name: string;
                attrs: {
                    fill: string;
                    stroke: string;
                    id: string;
                    d: string;
                    'stroke-opacity'?: undefined;
                };
            })[];
        }[];
    }[];
};
declare const stage: any;
declare const rect: HTMLElement | null;
declare const input: HTMLElement | null;
declare const button: HTMLElement | null;
declare let x: number;
declare let s: number;
declare const t = 100;
declare function translateX(): void;
