/** @jsx jsx */
/// <reference types="react" />
export interface CircleFadeProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const CircleFadeLoader: (props: CircleFadeProps) => JSX.Element;
export default CircleFadeLoader;
