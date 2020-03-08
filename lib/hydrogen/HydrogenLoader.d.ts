/// <reference types="react" />
export interface HydrogenProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const HydrogenLoader: (props: HydrogenProps) => JSX.Element;
export default HydrogenLoader;
