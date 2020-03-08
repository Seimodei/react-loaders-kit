import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface ClockProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 40,
    duration: 1,
    colors: [Colors.Purple, Colors.Purple]
}


const ClockLoader = (props: ClockProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const ClockAnim = keyframes`
        from { transform: rotate(0deg); }
        to { transform: rotate(359deg); }
    `;

    const Clock = styled('div')`
        width: inherit;
        height: inherit;
        border: 1px ${colors ? colors[0] : dProps.colors[0]} solid;
        border-radius: 50%;
        position: relative;

        &:before {
            content:'';
            border-left: 2px ${colors ? colors[1] : dProps.colors[1]} solid;
            position: absolute;
            top: 3px;
            left: 50%;
            height: calc( 50% - 2px );
            transform: rotate(0deg);
            transform-origin: 0% 100%;
            animation: ${ClockAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
            animation-play-state: ${pauseAnim(pause)};
        }

    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Clock></Clock>
        </LoaderBox>
    )
}

export default ClockLoader;