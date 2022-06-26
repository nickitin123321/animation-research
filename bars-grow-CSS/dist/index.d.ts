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
        attrs: {
            transform: string;
        };
        content: ({
            tag: string;
            name: string;
            attrs: {
                id: string;
                d?: undefined;
                stroke?: undefined;
                fill?: undefined;
            };
        } | {
            tag: string;
            name: string;
            attrs: {
                d: string;
                stroke: string;
                fill: string;
                id?: undefined;
            };
        })[];
    }[];
};
declare const stage: any;
declare const rects: any[];
declare const shapes: any;
declare const div: HTMLDivElement;
declare function addAnimate(event: MouseEvent): void;
declare function removeAnimate(event: MouseEvent): void;
