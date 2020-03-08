/// <reference types="react" />
export interface BlobProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const BlobLoader: (props: BlobProps) => JSX.Element;
export default BlobLoader;
