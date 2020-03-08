import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface WaveProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 40,
    duration: 0.6,
    color: Colors.Purple
}


const WaveLoader = (props: WaveProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const WaveAf = keyframes`
        from { transform: scale(0.5,0.5); opacity: 0; }
        to { transform: scale(1,1); opacity: 1; }
    `;

    const WaveBf = keyframes`
        from { transform: scale(1,1); opacity: 1; }
        to { transform: scale(1.5,1.5); opacity: 0; }
    `;

    const Wave = styled('div')`
        width: inherit;
        height: inherit;
        border-radius: 50%;
        position: relative;
        opacity: 1;

        &:before, &:after {
            content:'';
            border: 1px ${color ? color : dProps.color} solid;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            position: absolute;
            left:0px;
        }

        &:before {
            transform: scale(1,1);
            opacity: 1;
            animation: ${WaveBf} ${loaderDuration(duration, dProps.duration)} infinite linear;
            animation-play-state: ${pauseAnim(pause)};
        }

        &:after {
            transform: scale(0,0);
            opacity: 0;
            animation: ${WaveAf} ${loaderDuration(duration, dProps.duration)} infinite linear;
            animation-play-state: ${pauseAnim(pause)};
        }

    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Wave></Wave>
        </LoaderBox>
    )
}

export default WaveLoader;