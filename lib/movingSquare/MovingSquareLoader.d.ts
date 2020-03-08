/// <reference types="react" />
export interface MovingSquareProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}
declare const MovingSquareLoader: (props: MovingSquareProps) => JSX.Element;
export default MovingSquareLoader;
