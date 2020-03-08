/** @jsx jsx */
import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface GooeyCircleProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 80,
    colors: [ Colors.Yellow, Colors.Purple, Colors.Pink ]
}


const GooeyCircleLoader = (props: GooeyCircleProps) => {

    const {
        loading,
        size,
        pause,
        colors,
    } = props;

    const IndexAnim = keyframes`
        0%, 100% {
            z-index: 3;
        }
        33.3% {
            z-index: 2;
        }
        66.6% {
            z-index: 1;
        }
    `;

    const RotateMoveAnim = keyframes`
        55% {
            transform: rotate(0deg)
        }
        80% {
            transform: rotate(360deg)
        }
        100% {
            transform: rotate(360deg)
        }
    `;

    const Dot1Anim = keyframes`
        20% {
            transform: scale(1)
        }
        45% {
            transform: translate(25%, 15%) scale(.45)
        }
        60% {
            transform: translate(35%, 30%) scale(.45)
        }
        80% {
            transform: translate(35%, 30%) scale(.45)
        }
        100% {
            transform: translateY(0px) scale(1)
        }
    `;

    const Dot2Anim = keyframes`
        20% {
            transform: scale(1)
        }
        45% {
            transform: translate(-25%, 15%) scale(.45)
        }
        60% {
            transform: translate(-35%, 30%) scale(.45)
        }
        80% {
            transform: translate(-35%, 30%) scale(.45)
        }
        100% {
            transform: translateY(0px) scale(1)
        }
    `;

    const Dot3Anim = keyframes`
        20% {
            transform: scale(1)
        }
        45% {
            transform: translateY(-22%) scale(.45)
        }
        60% {
            transform: translateY(-40%) scale(.45)
        }
        80% {
            transform: translateY(-40%) scale(.45)
        }
        100% {
            transform: translateY(0px) scale(1)
        }
    `;

    const Dot1 = css`
        background-color: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        animation: ${Dot1Anim} 2s ease infinite, ${IndexAnim} 6s -2s ease infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Dot2 = css`
        background-color: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        animation: ${Dot2Anim} 2s ease infinite, ${IndexAnim} 6s -4s ease infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Dot3 = css`
        background-color: ${colors ? `${colors[2]}` : `${dProps.colors[2]}`};
        animation: ${Dot3Anim} 2s ease infinite, ${IndexAnim} 6s ease infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Container = styled('div')`
        width: inherit;
        height: inherit;
        filter: url('#goo');
        animation: ${RotateMoveAnim} 2s ease-in-out infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Dot = styled('div')`
        width: 45%;
        height: 45%;
        border-radius: 50%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    `;

    const SVG = styled('svg')`
        width: 0;
        height: 0;
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <SVG viewBox="0 0 0 0">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
                    </filter>
                </defs>
            </SVG>
            <Container>
                <Dot css={Dot1}></Dot>
                <Dot css={Dot2}></Dot>
                <Dot css={Dot3}></Dot>
            </Container>
        </LoaderBox>
    )
}


export default GooeyCircleLoader;