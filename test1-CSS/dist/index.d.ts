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
                    d: string;
                    'stroke-opacity'?: undefined;
                };
            })[];
        }[];
    }[];
};
declare const stage: any;
declare const recte: SVGPathElement | null;
declare function addAnimation(): void;
declare function removeAnimation(): void;
declare function addAnimationEvent(event: string): void;
declare function removeAnimationEvent(event: string): void;
