import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface DoubleSquareProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 30,
    duration: 2.5,
    colors: [Colors.Purple, Colors.Purple]
}


const DoubleSquareLoader = (props: DoubleSquareProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const DoubleSquareAnim = keyframes`
        from { 
            transform: rotate(0deg); 
        }
        to { 
            transform: rotate(360deg); 
        }
    `;

    const DoubleSquare = styled('div')`
        position: absolute;
        width: inherit;
        height: inherit;

        &:before, &:after {
            content: '';
            position: absolute;
            width: ${size ? `${size*0.88}px` : `${dProps.size*0.88}px`};
            height: ${size ? `${size*0.88}px` : `${dProps.size*0.88}px`};
        }

        &:after {
            border: ${size ? `${size*0.07}px` : `${dProps.size*0.07}px`} solid ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
            animation: ${DoubleSquareAnim} ${loaderDuration(duration, dProps.duration)} linear infinite;
            animation-play-state: ${pauseAnim(pause)};
        }

        &:before {
            border: ${size ? `${size*0.07}px` : `${dProps.size*0.07}px`} solid ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
            width: ${size ? `${size*1.3}px` : `${dProps.size*1.3}px`};
            height: ${size ? `${size*1.3}px` : `${dProps.size*1.3}px`};
            margin-left: -${size ? `${size*0.21}px` : `${dProps.size*0.21}px`};
            margin-top: -${size ? `${size*0.21}px` : `${dProps.size*0.21}px`};
            animation: ${DoubleSquareAnim} ${loaderDuration(duration, dProps.duration)} linear infinite;
            animation-play-state: ${pauseAnim(pause)};
            animation-direction: reverse;
        }

    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <DoubleSquare></DoubleSquare>
        </LoaderBox>
    )
}

export default DoubleSquareLoader;