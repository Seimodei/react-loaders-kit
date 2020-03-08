/// <reference types="react" />
export interface DoubleSquareProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const DoubleSquareLoader: (props: DoubleSquareProps) => JSX.Element;
export default DoubleSquareLoader;
