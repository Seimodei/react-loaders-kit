/// <reference types="react" />
export interface GooeyCircleProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    colors?: string[];
}
declare const GooeyCircleLoader: (props: GooeyCircleProps) => JSX.Element;
export default GooeyCircleLoader;
