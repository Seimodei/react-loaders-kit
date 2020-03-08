/** @jsx jsx */
/// <reference types="react" />
export interface LineProps {
    loading: boolean;
    lineWidth?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const LineLoader: (props: LineProps) => JSX.Element;
export default LineLoader;
