/// <reference types="react" />
export interface WaveProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const WaveLoader: (props: WaveProps) => JSX.Element;
export default WaveLoader;
