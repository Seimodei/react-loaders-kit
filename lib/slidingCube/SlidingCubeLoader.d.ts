/// <reference types="react" />
export interface SlidingCubeProps {
    loading: boolean;
    size?: number;
    duration?: number;
    pause?: boolean;
    colors?: string[];
}
declare const SlidingCubeLoader: (props: SlidingCubeProps) => JSX.Element;
export default SlidingCubeLoader;
