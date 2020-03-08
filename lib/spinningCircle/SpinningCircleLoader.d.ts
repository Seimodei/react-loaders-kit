/// <reference types="react" />
export interface SpinningCircleLoaderProps {
    loading: boolean;
    colors?: string[];
    pause?: boolean;
    size?: number;
}
declare const SpinningCircleLoader: (props: SpinningCircleLoaderProps) => JSX.Element;
export default SpinningCircleLoader;
