/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface FillSquareProps {
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
    colors: [Colors.Purple, Colors.Purple, Colors.Purple, Colors.Purple]
}


const FillSquareLoader = (props: FillSquareProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const BigSquareAnim = keyframes`
        0% {
            transform: scale(1)
        }
        90% {
            transform: scale(1)
        }
        100% {
            transform: scale(0.5)
        }
    `;

    const SquareAnim2 = keyframes`
        0% {
            transform: translateY(-${size ? size+10 : dProps.size+10}px);
        }
        25% {
            transform: translate(0);
        }
        100% {
            transform: translate(0);
        }
    `;

    const SquareAnim3 = keyframes`
        0% {
            transform: translateY(-${size ? size+10 : dProps.size+10}px);
        }
        50% {
            transform: translate(0);
        }
        100% {
            transform: translate(0);
        }
    `;

    const SquareAnim4 = keyframes`
        0% {
            transform: translateY(-${size ? size+10 : dProps.size+10}px);
        }
        75% {
            transform: translate(0);
        }
        100% {
            transform: translate(0);
        }
    `;

    const BigSquare = styled('div')`
        position: relative;
        display: inline-block;
        width: inherit;
        height: inherit;
        overflow: hidden;
        transform-origin: bottom left;
        animation: ${BigSquareAnim} ${loaderDuration(duration, dProps.duration)} linear infinite;
        animation-play-state: ${pauseAnim(pause)};
    `;

    const Square = styled('div')`
        position: absolute;
        width: ${size ? `${size/2}px` : `${dProps.size/2}px`}; 
        height: ${size ? `${size/2}px` : `${dProps.size/2}px`};
    `;

    const Square1 = css`
        left: 0px;
        top: ${size ? `${size/2}px` : `${dProps.size/2}px`};
        background: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
    `;

    const Square2 = css`
        left: ${size ? `${size/2}px` : `${dProps.size/2}px`};
        top: ${size ? `${size/2}px` : `${dProps.size/2}px`};
        background: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        animation: ${SquareAnim2} ${loaderDuration(duration, dProps.duration)} linear infinite;
        animation-play-state: ${pauseAnim(pause)};
    `;

    const Square3 = css`
        left: 0px;
        top: 0px;
        background: ${colors ? `${colors[2]}` : `${dProps.colors[2]}`};
        animation: ${SquareAnim3} ${loaderDuration(duration, dProps.duration)} linear infinite;
        animation-play-state: ${pauseAnim(pause)};
    `;

    const Square4 = css`
        left: ${size ? `${size/2}px` : `${dProps.size/2}px`};
        top: 0px;
        background: ${colors ? `${colors[3]}` : `${dProps.colors[3]}`};
        animation: ${SquareAnim4} ${loaderDuration(duration, dProps.duration)} linear infinite;
        animation-play-state: ${pauseAnim(pause)};
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <BigSquare>
                <Square css={Square1}></Square>
                <Square css={Square2}></Square>
                <Square css={Square3}></Square>
                <Square css={Square4}></Square>
            </BigSquare>
        </LoaderBox>
    )
}

export default FillSquareLoader;