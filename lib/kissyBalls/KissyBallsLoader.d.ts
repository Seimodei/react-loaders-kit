/// <reference types="react" />
export interface KissyBallsProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const KissyBallsLoader: (props: KissyBallsProps) => JSX.Element;
export default KissyBallsLoader;
