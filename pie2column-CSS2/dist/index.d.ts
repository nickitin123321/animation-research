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
            content: {
                tag: string;
                name: string;
                attrs: {
                    d: string;
                    fill: string;
                    stroke: string;
                    id: string;
                    transform: string;
                };
            }[];
        }[];
    }[];
};
declare const stage: any;
declare const but: HTMLButtonElement | null;
declare const p: HTMLElement | null;
