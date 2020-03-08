/// <reference types="react" />
export interface ClockProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const ClockLoader: (props: ClockProps) => JSX.Element;
export default ClockLoader;
