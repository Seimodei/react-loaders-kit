import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface PingPongProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 90,
    duration: .8,
    colors: [Colors.Purple, Colors.Purple]
}


const PingPongLoader = (props: PingPongProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const Bounce = keyframes`
        0% {
            transform: translate3d(0, ${size ? size*0.02 : dProps.size*0.02}px, 0) scale(0.9, 1.1);
        }
        100% {
            transform: translate3d(0, ${size ? size*0.39 : dProps.size*0.39}px, 0) scale(1.2, 0.85);
        }
    `;

    const Swing = keyframes`
        0% {
            transform: rotate(-45deg);
        }
        
        100% {
            transform: rotate(45deg);
        }
    `;

    const PingPong = styled('div')`
        border-radius: 50%;
        position: relative;
        width: inherit ;
        height: inherit ;

        &:after, &:before {
            position: absolute;
            content: "";
        }

        &:after {
            height: ${size ? size*0.055 : dProps.size*0.055}px;
            width: ${size ? size*0.55 : dProps.size*0.55}px;
            background-color: ${colors ? colors[0] : dProps.colors[0]};
            top: ${size ? size*0.6 : dProps.size*0.6}px;
            left: ${size ? size*0.22 : dProps.size*0.22}px;
            animation: ${Swing} ${duration ? duration : dProps.duration}s ease-in-out infinite;
            animation-direction: alternate;
            animation-play-state: ${pauseAnim(pause)};
        }
        
        &:before {
            height: ${size ? size*0.11 : dProps.size*0.11}px;
            width: ${size ? size*0.11 : dProps.size*0.11}px;
            background-color: ${colors ? colors[1] : dProps.colors[1]};
            border-radius: 50%;
            top: ${size ? size*0.16 : dProps.size*0.16}px;
            left: ${size ? size*0.43 : dProps.size*0.43}px;
            animation: ${Bounce} ${duration ? duration/2 : dProps.duration/2}s ease-in-out infinite;
            animation-direction: alternate;
            animation-play-state: ${pauseAnim(pause)};
        }
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <PingPong></PingPong>
        </LoaderBox>
    )
}

export default PingPongLoader;