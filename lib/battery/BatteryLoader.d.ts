/// <reference types="react" />
export interface BatteryProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const BatteryLoader: (props: BatteryProps) => JSX.Element;
export default BatteryLoader;
