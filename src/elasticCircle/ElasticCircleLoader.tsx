import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';




export interface ElasticCircleProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 40,
    duration: 1,
    color: Colors.Purple
}



const ElasticCircleLoader = (props: ElasticCircleProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const ElasticAnim = keyframes`
        0% {
            width: ${size ? `${size}px` : `${dProps.size}px`};
            height: ${size ? `${size}px` : `${dProps.size}px`};
        }
        25% {
            height: 10%;
        }
        50% {
            width: 10%;
        }
        75% {
            width: 85%;
        }
        100% {
            width: 85%;
            height: 85%;
        }
    `;

    const Loader = styled('div')`
        width: inherit;
        height: inherit;
        border-radius: 100%;
        border: ${color ? `4px solid ${color}` : `4px solid ${dProps.color}`};
        background-color: transparent;
        animation: ${ElasticAnim} ${duration ? duration : dProps.duration}s infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Loader></Loader>
        </LoaderBox>
    )
}

export default ElasticCircleLoader;