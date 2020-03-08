/// <reference types="react" />
export interface PingPongProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const PingPongLoader: (props: PingPongProps) => JSX.Element;
export default PingPongLoader;
