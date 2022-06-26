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
                opacity: string;
                stroke: string;
                transform: string;
            };
            content: {
                tag: string;
                name: string;
                attrs: {
                    id: string;
                    d: string;
                    fill: string;
                    'transform-origin': string;
                };
            }[];
        }[];
    }[];
};
declare const stage: any;
declare function spread(): void;
declare function freeze(event: MouseEvent): void;
declare function removeAnimate(event: MouseEvent): void;
declare const div: HTMLDivElement;
