/** @jsx jsx */
/// <reference types="react" />
export interface BlurrySquareProps {
    loading: boolean;
    boxNumber?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const BlurrySquareLoader: (props: BlurrySquareProps) => JSX.Element;
export default BlurrySquareLoader;
