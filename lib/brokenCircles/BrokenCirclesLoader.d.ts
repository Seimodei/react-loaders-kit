/// <reference types="react" />
export interface BrokenCirclesProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    colors?: string[];
}
declare const BrokenCirclesLoader: (props: BrokenCirclesProps) => JSX.Element;
export default BrokenCirclesLoader;
