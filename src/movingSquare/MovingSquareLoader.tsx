import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface MovingSquareProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 60,
    duration: 1,
    colors: [Colors.Purple, Colors.Purple]
}


const MovingSquareLoader = (props: MovingSquareProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const SquareMove = keyframes`
        0%, 100%{
            transform: translate(0,0) rotate(0);
        }
        
        25%{
            transform: translate(30px,30px) rotate(45deg);
        }
        
        50%{
            transform: translate(0px,60px) rotate(0deg);
        }
        
        75%{
            transform: translate(-30px,30px) rotate(45deg);
        }
    `;

    const Loader = styled('div')`
        transform: ${size ? `scale(${size/100})` : `scale(${dProps.size/100})`};
        transform-origin: center;
        position: relative;
        width: inherit;
        height: inherit;


        &:before, &:after {
            content: "";
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0;
            left: 0;
            animation: ${SquareMove} ${loaderDuration(duration, dProps.duration)} ease-in-out infinite;
            animation-play-state: ${pauseAnim(pause)};
        }

        &:before {
            background-color: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        }

        &:after {
            background-color: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
            animation-delay: ${duration ? `${duration/2}s` : `${dProps.duration/2}s`};
        }
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Loader></Loader>
        </LoaderBox>
    )
}

export default MovingSquareLoader;