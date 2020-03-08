/// <reference types="react" />
export interface LiquidLoaderProps {
    loading: boolean;
    color?: string;
    pause?: boolean;
    size?: number | undefined;
    duration?: number;
}
declare const LiquidLoader: (props: LiquidLoaderProps) => JSX.Element;
export default LiquidLoader;
