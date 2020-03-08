/** @jsx jsx */
/// <reference types="react" />
export interface NotePadProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const NotePadLoader: (props: NotePadProps) => JSX.Element;
export default NotePadLoader;
