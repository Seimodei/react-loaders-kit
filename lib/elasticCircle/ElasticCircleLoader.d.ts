/// <reference types="react" />
export interface ElasticCircleProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}
declare const ElasticCircleLoader: (props: ElasticCircleProps) => JSX.Element;
export default ElasticCircleLoader;
