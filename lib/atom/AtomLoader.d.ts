/** @jsx jsx */
/// <reference types="react" />
export interface AtomProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const AtomLoader: (props: AtomProps) => JSX.Element;
export default AtomLoader;
