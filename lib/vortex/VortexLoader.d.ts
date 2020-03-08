/// <reference types="react" />
export interface VortexProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const VortexLoader: (props: VortexProps) => JSX.Element;
export default VortexLoader;
