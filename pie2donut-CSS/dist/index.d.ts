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
                    id: string;
                    d: string;
                    fill: string;
                    stroke: string;
                    transform: string;
                };
            }[];
        }[];
    }[];
};
declare const stage: any;
declare const but: HTMLButtonElement | null;
declare const p: HTMLElement | null;
