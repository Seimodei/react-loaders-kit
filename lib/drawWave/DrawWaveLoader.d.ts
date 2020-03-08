/// <reference types="react" />
export interface DrawWaveProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const DrawWaveLoader: (props: DrawWaveProps) => JSX.Element;
export default DrawWaveLoader;
