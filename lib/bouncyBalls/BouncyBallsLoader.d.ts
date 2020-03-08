/** @jsx jsx */
/// <reference types="react" />
export interface BouncyBallsProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const BouncyBallsLoader: (props: BouncyBallsProps) => JSX.Element;
export default BouncyBallsLoader;
