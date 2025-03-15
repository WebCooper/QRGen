export type ImageOptions = {
    hideBackgroundDots?: boolean;
    imageSize?: number;
    margin?: number;
};

export type DotsOptions = {
    color?: string;
    type?: "square" | "rounded" | "dots" | "classy" | "classy-rounded" | "extra-rounded";
};

export type BackgroundOptions = {
    color?: string;
};

export type Options = {
    imageOptions?: ImageOptions;
    dotsOptions?: DotsOptions;
    backgroundOptions?: BackgroundOptions;
};
