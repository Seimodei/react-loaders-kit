/// <reference types="react" />
export interface SlicesProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const SlicesLoader: (props: SlicesProps) => JSX.Element;
export default SlicesLoader;
