/** @jsx jsx */
/// <reference types="react" />
export interface SpinningOrbitProps {
    loading: boolean;
    pause?: boolean;
    size?: number;
    colors?: string[];
}
declare const SpinningOrbitLoader: (props: SpinningOrbitProps) => JSX.Element;
export default SpinningOrbitLoader;
