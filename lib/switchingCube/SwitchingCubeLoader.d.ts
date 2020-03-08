/// <reference types="react" />
export interface SwitchingCubeProps {
    loading: boolean;
    size?: number;
    duration?: number;
    pause?: boolean;
    colors?: string[];
}
declare const SwitchingCubeLoader: (props: SwitchingCubeProps) => JSX.Element;
export default SwitchingCubeLoader;
