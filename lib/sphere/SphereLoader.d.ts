/// <reference types="react" />
export interface SphereProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const SphereLoader: (props: SphereProps) => JSX.Element;
export default SphereLoader;
