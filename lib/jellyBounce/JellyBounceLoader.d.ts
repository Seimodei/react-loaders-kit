/** @jsx jsx */
/// <reference types="react" />
export interface JellyBounceProps {
    loading: boolean;
    size?: number;
    jellyNumber?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const JellyBounceLoader: (props: JellyBounceProps) => JSX.Element;
export default JellyBounceLoader;
