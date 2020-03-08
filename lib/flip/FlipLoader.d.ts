/// <reference types="react" />
export interface FlipProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const FlipLoader: (props: FlipProps) => JSX.Element;
export default FlipLoader;
