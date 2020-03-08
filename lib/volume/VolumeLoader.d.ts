/// <reference types="react" />
export interface VolumeProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const VolumeLoader: (props: VolumeProps) => JSX.Element;
export default VolumeLoader;
