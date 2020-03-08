/** @jsx jsx */
/// <reference types="react" />
export interface HypnosisProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const HypnosisLoader: (props: HypnosisProps) => JSX.Element;
export default HypnosisLoader;
