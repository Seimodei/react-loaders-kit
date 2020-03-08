/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration, loaderColor } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface CircleFadeProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 40,
    duration: .5,
    color: Colors.Purple
}


const CircleFadeLoader = (props: CircleFadeProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const Dot1Anim = keyframes`
        100% {
            transform: translateX(${size ? size*0.375 : dProps.size*0.375}px);
            opacity: 1;
            filter: none;
        }
    `;

    const Dot2Anim = keyframes`
        100% {
            transform: translateX(${size ? size*0.375 : dProps.size*0.375}px);
        }
    `;

    const Dot3Anim = keyframes`
        100% {
            transform: translateX(${size ? size*0.75 : dProps.size*0.75}px);
            opacity: 0;
            filter: alpha(opacity=0);
        }
    `;

    const Dots = styled('div')`
        display: flex;
    `;

    const Dot = styled('i')`
        width: ${size ? size*0.2 : dProps.size*0.2}px;
        height: ${size ? size*0.2 : dProps.size*0.2}px;
        display: block;
        background: ${loaderColor(color, dProps.color)};
        border-radius: 50%;
        margin: 0 ${size ? (size*0.2)/2 : (dProps.size*0.2)/2}px;
        animation: ${Dot2Anim} ${loaderDuration(duration, dProps.duration)} linear infinite;
        animation-play-state: ${pauseAnim(pause)};
    `;

    const dot1css = css`
        animation: ${Dot1Anim} ${loaderDuration(duration, dProps.duration)} linear infinite;
        opacity: 0;
        transform: translateX(-${size ? size*0.375 : dProps.size*0.375}px);
        animation-play-state: ${pauseAnim(pause)};
    `;

    const dot4css = css`
        animation: ${Dot3Anim} ${loaderDuration(duration, dProps.duration)} linear infinite;
        animation-play-state: ${pauseAnim(pause)};
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Dots>
                <Dot css={dot1css}></Dot>
                <Dot></Dot>
                <Dot></Dot>
                <Dot css={dot4css}></Dot>
            </Dots>
        </LoaderBox>
    )
}

export default CircleFadeLoader;