import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration, convertToRgba } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface SlicesProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 80,
    duration: 1,
    color: Colors.Purple
}


const SlicesLoader = (props: SlicesProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const SlicesAnim = keyframes`
        0% {
            border-top: ${color ? convertToRgba(color, 75) : convertToRgba(dProps.color, 75)} solid;
            border-right: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-bottom: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-left: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
        }
        25% {
            border-top: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-right: ${color ? convertToRgba(color, 75) : convertToRgba(dProps.color, 75)} solid;
            border-bottom: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-left: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
        }
        50% {
            border-top: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-right: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-bottom: ${color ? convertToRgba(color, 75) : convertToRgba(dProps.color, 75)} solid;
            border-left: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
        }
        75% {
            border-top: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-right: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-bottom: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-left: ${color ? convertToRgba(color, 75) : convertToRgba(dProps.color, 75)} solid;
        }
        100% {
            border-top: ${color ? convertToRgba(color, 75) : convertToRgba(dProps.color, 75)} solid;
            border-right: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-bottom: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
            border-left: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
        }
    `;


    const Slices = styled('div')`
        border-radius: 50%;
        border-top: 16px ${color ? convertToRgba(color, 75) : convertToRgba(dProps.color, 75)} solid;
        border-left: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
        border-bottom: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
        border-right: ${color ? convertToRgba(color, 25) : convertToRgba(dProps.color, 25)} solid;
        animation: ${SlicesAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
        animation-play-state: ${pauseAnim(pause)};
        transform: scale(${size ? size/10 : dProps.size/10});
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Slices></Slices>
        </LoaderBox>
    )
}

export default SlicesLoader;