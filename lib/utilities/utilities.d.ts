export declare enum Colors {
    Purple = "#5e22f0",
    Yellow = "#f6b93b",
    Pink = "#ef5777"
}
export declare const convertToRgba: (colorString: string, colorOpacity: number) => string;
export declare const loaderDuration: (customDuration: number | undefined, defaultDuration: number) => string;
export declare const loaderColor: (customColor: string | undefined, defaultColor: string) => string;
export declare const pauseAnim: (pauseState: boolean | undefined) => string;
export declare const lightenDarkenColor: (col: string, amt: number) => string;
