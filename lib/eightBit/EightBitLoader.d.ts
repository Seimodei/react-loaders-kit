/// <reference types="react" />
export interface EightBitProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const EightBitLoader: (props: EightBitProps) => JSX.Element;
export default EightBitLoader;
