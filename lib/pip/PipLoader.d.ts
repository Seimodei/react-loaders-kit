/** @jsx jsx */
/// <reference types="react" />
export interface PipProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const PipLoader: (props: PipProps) => JSX.Element;
export default PipLoader;
