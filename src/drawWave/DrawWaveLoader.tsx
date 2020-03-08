import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface DrawWaveProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 50,
    duration: .8,
    color: Colors.Purple
}


const DrawWaveLoader = (props: DrawWaveProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const Slide = keyframes`
        50% {
            transform: translateY(10px);
        }
    `;

    const Loader = styled('div')`
        display: flex;
    `;

    const Wave = styled('div')`
        width: ${size ? `${size*0.2}px` : `${dProps.size*0.2}px` };
        height: ${size ? `${size*0.44}px` : `${dProps.size*0.44}px` };;
        border: 2px solid #ffffff;
        background: ${color ? `${color}` : `${dProps.color}`};
        margin-left: -2px;
        animation: ${Slide} ${loaderDuration(duration, dProps.duration)} infinite linear;
        animation-play-state: ${pauseAnim(pause)};
        
        &:first-of-type {
            border-top-left-radius: 1000px;
            border-bottom-left-radius: 1000px;
        }
    
        &:last-of-type {
            border-top-right-radius: 1000px;
            border-bottom-right-radius: 1000px;
        }
        
        &:nth-of-type(2n+1) {
            animation-delay: ${duration ? duration/2 : dProps.duration/2}s;
        }
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Loader>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
            </Loader>
        </LoaderBox>
    )
}

export default DrawWaveLoader;