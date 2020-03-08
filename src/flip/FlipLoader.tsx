import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration, loaderColor } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface FlipProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 45,
    duration: 1,
    color: Colors.Purple
}


const FlipLoader = (props: FlipProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const FlipAnim = keyframes`
        0% {
            transform: rotate(0);
        }
        
        50% {
            transform: rotateY(180deg);
        }
        
        100% {
            transform: rotateY(180deg)  rotateX(180deg);
        }
    `;

    const Loader = styled('div')`
        perspective: 120px;
        position: relative;
        width: inherit; 
        height: inherit;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: ${size ? `${size}px` : `${dProps.size}px`}; 
            height: ${size ? `${size}px` : `${dProps.size}px`};
            background-color: ${loaderColor(color, dProps.color)};
            animation: ${FlipAnim} ${loaderDuration(duration, dProps.duration)} infinite;
            animation-play-state: ${pauseAnim(pause)};
        }
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Loader></Loader>
        </LoaderBox>
    )
}

export default FlipLoader;