/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';


export interface BouncyBallsProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}


const dProps = {
    loading: true,
    size: 40,
    duration: 0.4,
    colors: [ Colors.Purple, Colors.Purple, Colors.Purple ]
}


const BouncyBallsLoader = (props: BouncyBallsProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const bubbleConfig = (loaderSize: number) => {
        if (loaderSize <= 80 && loaderSize >= 60) {
            return 16;
        } else if (loaderSize < 60) {
            return 11;
        }
        return 20;
    }

    const Bouncing = keyframes`
        0% {
            transform: translate3d(0, 10px, 0) scale(1.2, 0.85);
        }

        100% {
            transform: translate3d(0, -20px, 0) scale(0.9, 1.1);
        }
    `;

    const LoaderBalls = styled('div')`
        width: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const Ball = styled('div')`
        width: ${size ? `${bubbleConfig(size)}px` : `${bubbleConfig(dProps.size)}px`};
        height: ${size ? `${bubbleConfig(size)}px` : `${bubbleConfig(dProps.size)}px`};
        border-radius: 50%;
    `;

    const BallAnim1 = css`
        background: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        animation: ${Bouncing} ${duration ? duration : dProps.duration}s alternate infinite cubic-bezier(.6,.05,.15,.95);
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const BallAnim2 = css`
        background: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        animation: ${Bouncing} ${duration ? duration : dProps.duration}s ${duration ? duration/4 : dProps.duration/4}s alternate infinite cubic-bezier(.6,.05,.15,.95) backwards;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const BallAnim3 = css`
        background: ${colors ? `${colors[2]}` : `${dProps.colors[2]}`};
        animation: ${Bouncing} ${duration ? duration : dProps.duration}s ${duration ? duration/2 : dProps.duration/2}s alternate infinite cubic-bezier(.6,.05,.15,.95) backwards;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;



    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <LoaderBalls>
                <Ball css={BallAnim1}></Ball>
                <Ball css={BallAnim2}></Ball>
                <Ball css={BallAnim3}></Ball>
            </LoaderBalls>
        </LoaderBox>
    )
}


export default BouncyBallsLoader;



