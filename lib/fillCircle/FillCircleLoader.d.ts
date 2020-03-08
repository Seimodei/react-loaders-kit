/** @jsx jsx */
/// <reference types="react" />
export interface FillCircleProps {
    loading: boolean;
    pause?: boolean;
    size?: number;
    colors?: string[];
}
declare const FillCircleLoader: (props: FillCircleProps) => JSX.Element;
export default FillCircleLoader;
