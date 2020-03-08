/// <reference types="react" />
export interface CirclePopProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const CirclePopLoader: (props: CirclePopProps) => JSX.Element;
export default CirclePopLoader;
