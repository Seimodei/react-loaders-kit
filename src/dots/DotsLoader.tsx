import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface DotsProps {
    loading: boolean;
    size?: number;
    duration?: number;
    pause?: boolean;
    color?: string;
}

const dProps = {
    loading: true,
    duration: 2,
    size: 45,
    color: Colors.Purple
}


const DotsLoader = (props: DotsProps) => {

    const {
        loading,
        size,
        pause,
        color,
        duration
    } = props;

    const Dot1 = keyframes`
        0%   { transform: rotate(90deg); }
        0%  { transform: rotate(90deg); }
        50%  { transform: rotate(180deg); }
        75%  { transform: rotate(270deg); }
        100% { transform: rotate(360deg); }
    `;

    const Dot2 = keyframes`
        0%   { transform: rotate(90deg); }
        25%  { transform: rotate(90deg); }
        25%  { transform: rotate(180deg); }
        75%  { transform: rotate(270deg); }
        100% { transform: rotate(360deg); }
    `;

    const Dot3 = keyframes`
        0%   { transform: rotate(90deg); }
        25%  { transform: rotate(90deg); }
        50%  { transform: rotate(180deg); }
        50%  { transform: rotate(270deg); }
        100% { transform: rotate(360deg); }
    `;

    const Dot4 = keyframes`
        0%   { transform: rotate(90deg); }
        25%  { transform: rotate(90deg); }
        50%  { transform: rotate(180deg); }
        75%  { transform: rotate(270deg); }
        75% { transform: rotate(360deg); }
        100% { transform: rotate(360deg); }
    `;

    const Dots = styled('div')`
        width: inherit;
        height: inherit;

        div {
            content: '';
            position: absolute;
            width: ${size ? `${size*0.27}px` : `${dProps.size*0.27}px`};
            height: ${size ? `${size*0.27}px` : `${dProps.size*0.27}px`};
            background: ${color ? `${color}` : `${dProps.color}`};
            top: ${size ? `${size*0.17}px` : `${dProps.size*0.17}px`};
            left: ${size ? `${size*0.17}px` : `${dProps.size*0.17}px`};
            transform-origin: ${size ? `${size*0.33}px` : `${dProps.size*0.33}px`} ${size ? `${size*0.33}px` : `${dProps.size*0.33}px`};
            border-radius: 50%;
            animation: ${Dot1} ${loaderDuration(duration, dProps.duration)} infinite cubic-bezier(0.5, 0, 0.5, 1);
            animation-play-state: ${pauseAnim(pause)};

            &:nth-of-type(2) {
                top: ${size ? `${size*0.17}px` : `${dProps.size*0.17}px`};
                left: auto;
                right: ${size ? `${size*0.17}px` : `${dProps.size*0.17}px`};
                transform-origin: ${size ? `-${size*0.07}px` : `-${dProps.size*0.07}px`} ${size ? `${size*0.33}px` : `${dProps.size*0.33}px`};
                animation: ${Dot2} ${loaderDuration(duration, dProps.duration)} infinite cubic-bezier(0.5, 0, 0.5, 1);
                animation-play-state: ${pauseAnim(pause)};
            }

            &:nth-of-type(3) {
                top: auto;
                left: auto;
                right: ${size ? `${size*0.17}px` : `${dProps.size*0.17}px`};
                bottom: ${size ? `${size*0.17}px` : `${dProps.size*0.17}px`};
                transform-origin: ${size ? `-${size*0.07}px` : `-${dProps.size*0.07}px`} ${size ? `-${size*0.07}px` : `-${dProps.size*0.07}px`};
                animation: ${Dot3} ${loaderDuration(duration, dProps.duration)} infinite cubic-bezier(0.5, 0, 0.5, 1);
                animation-play-state: ${pauseAnim(pause)};
            }

            &:nth-of-type(4) {
                top: auto;
                bottom: ${size ? `${size*0.17}px` : `${dProps.size*0.17}px`};
                transform-origin: ${size ? `${size*0.33}px` : `${dProps.size*0.33}px`} ${size ? `-${size*0.07}px` : `-${dProps.size*0.07}px`};
                animation: ${Dot4} ${loaderDuration(duration, dProps.duration)} infinite cubic-bezier(0.5, 0, 0.5, 1);
                animation-play-state: ${pauseAnim(pause)};
            }
        }
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Dots>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Dots>
        </LoaderBox>
    )
}

export default DotsLoader;