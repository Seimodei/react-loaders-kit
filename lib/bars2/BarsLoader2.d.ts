/** @jsx jsx */
/// <reference types="react" />
export interface BarsProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const BarsLoader2: (props: BarsProps) => JSX.Element;
export default BarsLoader2;
