/** @jsx jsx */
/// <reference types="react" />
export interface HelixLoaderProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
    numberOfDots?: number;
}
declare const HelixLoader: (props: HelixLoaderProps) => JSX.Element;
export default HelixLoader;
