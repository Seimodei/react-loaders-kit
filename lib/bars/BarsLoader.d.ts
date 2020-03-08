/// <reference types="react" />
export interface BarsProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const BarsLoader: (props: BarsProps) => JSX.Element;
export default BarsLoader;
