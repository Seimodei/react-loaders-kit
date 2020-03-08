import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration, convertToRgba } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface BarsProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 35,
    duration: 1,
    colors: [Colors.Purple, Colors.Yellow]
}


const BarsLoader = (props: BarsProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const BarsAnim = keyframes`
        0% {
            transform: scale(1,1);
        }
        25% {
            transform: scale(1,1);
        }
        50% {
            transform: scale(1,1.25);
        }
        75% {
            transform: scale(1,1);
        }
        100% {
            transform: scale(1,1);
        }
    `;

    const BarsBeforeAnim = keyframes`
        0% {
            transform: scale(1,1);
        }
        25% {
            transform: scale(1,1.25);
        }
        50% {
            transform: scale(1,0.75);
        }
        75% {
            transform: scale(1,1);
        }
        100% {
            transform: scale(1,1);
        }
    `;

    const BarsAfterAnim = keyframes`
        0% {
            transform: scale(1,1);
        }
        25% {
            transform: scale(1,1);
        }
        50% {
            transform: scale(1,0.75);
        }
        75% {
            transform: scale(1,1.25);
        }
        100% {
            transform: scale(1,1);
        }
    `;

    const Bars = styled('div')`
        width: ${size ? `${size*0.25}px` : `${dProps.size*0.25}px`};
        height: inherit;
        position: relative;
        border: 1px ${colors ? `${colors[0]}` : `${dProps.colors[0]}`} solid;
        background-color: ${colors ? convertToRgba(colors[1], 25) : convertToRgba(dProps.colors[1], 25)};
        animation: ${BarsAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
        animation-play-state: ${pauseAnim(pause)};

        &:before, &:after {
            content:'';
            position: absolute;
            width: inherit;
            height: inherit;
            border: inherit;
            background-color: inherit;
            top: -1px;
        }

        &:before {
            left: ${size ? `${size/2}px` : `${dProps.size/2}px`};
            animation: ${BarsBeforeAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
            animation-play-state: ${pauseAnim(pause)};
        }

        &:after {
            right: ${size ? `${size/2}px` : `${dProps.size/2}px`};
            animation: ${BarsAfterAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
            animation-play-state: ${pauseAnim(pause)};
        }

    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Bars></Bars>
        </LoaderBox>
    )
}

export default BarsLoader;