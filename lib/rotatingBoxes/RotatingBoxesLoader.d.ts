/// <reference types="react" />
export interface RotatingBoxesProps {
    loading: boolean;
    pause?: boolean;
    duration?: number;
    size?: number;
    boxBorderWidth?: number;
    colors?: string[];
}
declare const RotatingBoxesLoader: (props: RotatingBoxesProps) => JSX.Element;
export default RotatingBoxesLoader;
