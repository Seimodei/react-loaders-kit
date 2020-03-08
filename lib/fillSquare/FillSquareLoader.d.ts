/** @jsx jsx */
/// <reference types="react" />
export interface FillSquareProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const FillSquareLoader: (props: FillSquareProps) => JSX.Element;
export default FillSquareLoader;
