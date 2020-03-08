/// <reference types="react" />
export interface DotsProps {
    loading: boolean;
    size?: number;
    duration?: number;
    pause?: boolean;
    color?: string;
}
declare const DotsLoader: (props: DotsProps) => JSX.Element;
export default DotsLoader;
