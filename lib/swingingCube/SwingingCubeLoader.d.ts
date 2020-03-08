/// <reference types="react" />
export interface SwingingCubeProps {
    loading: boolean;
    size?: number;
    duration?: number;
    pause?: boolean;
    colors?: string[];
}
declare const SwingingCubeLoader: (props: SwingingCubeProps) => JSX.Element;
export default SwingingCubeLoader;
