/// <reference types="react" />
export interface PulseBubbleProps {
    loading: boolean;
    pause?: boolean;
    size?: number;
    colors?: string[];
}
declare const PulseBubbleLoader: (props: PulseBubbleProps) => JSX.Element;
export default PulseBubbleLoader;
