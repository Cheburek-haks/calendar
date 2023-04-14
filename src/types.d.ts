declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    const classes: string;
    export default classes;
}
declare module "*.jpg" {
    const classes: string;
    export default classes;
}
declare module "*.jpeg" {
    const classes: string;
    export default classes;
}
declare module "*.png" {
    const classes: string;
    export default classes;
}
declare module "*.webp" {
    const classes: string;
    export default classes;
}
declare type SVGFC = import("react").VFC<
    import("react").SVGProps<SVGSVGElement>
>;
