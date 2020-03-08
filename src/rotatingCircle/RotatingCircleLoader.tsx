import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface RotatingCircleProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 20,
    duration: 1.2,
    colors: [Colors.Purple, Colors.Purple, Colors.Yellow, Colors.Pink]
}


const RotatingCircleLoader = (props: RotatingCircleProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const Anim12 = keyframes`
        50% {
            transform: scale(1.3) translate(0, 0);
            box-shadow: 0 0 0 ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
            opacity: .8;
        }
    `;

    const Anim34 = keyframes`
        50% {
            transform: scale(1.3) translate(0, 0);
            box-shadow: 0 0 0 ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
            opacity: .8;
        }
    `;

    const AnimRotate = keyframes`
        0% { transform: rotate(0deg); }
        50% { transform: rotate(360deg); }
        100% { transform: rotate(720deg); }
    `;

    const RotatingCircle = styled('div')`
        position: relative;
        width: 0;
        height: 0;
        margin: 4em auto;
        animation: ${AnimRotate} ${loaderDuration(duration, dProps.duration)} infinite ease;
        animation-play-state: ${pauseAnim(pause)};

        &:before,
        &:after {
            content: '';
            position: absolute;
            width: ${size ? `${size}px` : `${dProps.size}px`};
            height: ${size ? `${size}px` : `${dProps.size}px`};
            top: 50%;
            left: 50%;
            margin-top: ${size ? `-${size/2}px` : `-${dProps.size/2}px`};
            margin-left: ${size ? `-${size/2}px` : `-${dProps.size/2}px`};
            border-radius: ${size ? `${size/2}px` : `${dProps.size/2}px`};
            opacity: .9;
        }
        
        &::before {
            background: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
            transform: translate(${size ? `-${size*0.6}px` : `-${dProps.size*0.6}px`}, ${size ? `-${size*0.6}px` : `-${dProps.size*0.6}px`}) scale(1);
            box-shadow: ${size ? `${size*1.2}px` : `${dProps.size*1.2}px`} ${size ? `${size*1.2}px` : `${dProps.size*1.2}px`} 0 ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
            animation: ${Anim12} ${loaderDuration(duration, dProps.duration)} infinite ease;
            animation-play-state: ${pauseAnim(pause)};
        }
        
        &:after {
            background: ${colors ? `${colors[2]}` : `${dProps.colors[2]}`};
            transform: translate(${size ? `${size*0.6}px` : `${dProps.size*0.6}px`}, ${size ? `-${size*0.6}px` : `-${dProps.size*0.6}px`}) scale(1);
            box-shadow: ${size ? `-${size*1.2}px` : `-${dProps.size*1.2}px`} ${size ? `${size*1.2}px` : `${dProps.size*1.2}px`} 0 ${colors ? `${colors[3]}` : `${dProps.colors[3]}`};
            animation: ${Anim34} ${loaderDuration(duration, dProps.duration)} infinite ease;
            animation-play-state: ${pauseAnim(pause)};
        }
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <RotatingCircle></RotatingCircle>
        </LoaderBox>
    )
}

export default RotatingCircleLoader;