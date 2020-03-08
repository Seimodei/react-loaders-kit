import { ReactNode } from 'react';
export interface WrapperProps {
    size: number | undefined;
    loading: boolean | undefined;
    dPropsSize: number;
    children: ReactNode;
}
declare const LoaderBox: (props: WrapperProps) => JSX.Element;
export default LoaderBox;
