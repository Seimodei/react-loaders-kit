/** @jsx jsx */
/// <reference types="react" />
export interface LinneardLoaderProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const LinneardLoader: (props: LinneardLoaderProps) => JSX.Element;
export default LinneardLoader;
