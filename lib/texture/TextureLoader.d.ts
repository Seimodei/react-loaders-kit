/// <reference types="react" />
export interface TextureProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const TextureLoader: (props: TextureProps) => JSX.Element;
export default TextureLoader;
