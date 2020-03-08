/// <reference types="react" />
export interface RotatingCircleProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const RotatingCircleLoader: (props: RotatingCircleProps) => JSX.Element;
export default RotatingCircleLoader;
