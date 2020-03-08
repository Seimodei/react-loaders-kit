/** @jsx jsx */
/// <reference types="react" />
export interface FlippingCubeProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    colors?: string[];
}
declare const FlippingCubeLoader: (props: FlippingCubeProps) => JSX.Element;
export default FlippingCubeLoader;
