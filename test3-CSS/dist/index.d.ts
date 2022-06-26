declare const config: {
    tag: string;
    name: string;
    attrs: {
        xmlns: string;
        width: string;
        height: string;
    };
    content: ({
        tag: string;
        name: string;
        attrs: {
            id: string;
            r: string;
            cx: string;
            cy: string;
            fill: string;
            d?: undefined;
            stroke?: undefined;
        };
    } | {
        tag: string;
        name: string;
        attrs: {
            d: string;
            stroke: string;
            id?: undefined;
            r?: undefined;
            cx?: undefined;
            cy?: undefined;
            fill?: undefined;
        };
    })[];
};
declare const stage: any;
declare const circle: HTMLElement | null;
declare function addClass(): void;
