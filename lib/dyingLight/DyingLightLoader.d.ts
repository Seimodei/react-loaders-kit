/** @jsx jsx */
/// <reference types="react" />
export interface DyingLightProps {
    loading: boolean;
    pause?: boolean;
    size?: number;
    colors?: string[];
}
declare const DyingLightLoader: (props: DyingLightProps) => JSX.Element;
export default DyingLightLoader;
