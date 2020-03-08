/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface JellyBounceProps {
    loading: boolean;
    size?: number;
    jellyNumber?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 150,
    jellyNumber: 5,
    duration: 0.6,
    colors: [ Colors.Purple, Colors.Purple, Colors.Purple, Colors.Purple, Colors.Purple ]
}

const JellyBounceLoader = (props: JellyBounceProps) => {

    const {
        loading,
        size,
        pause,
        jellyNumber,
        duration,
        colors,
    } = props;

    const numberOfChildren = jellyNumber ? jellyNumber : dProps.jellyNumber;

    const left = 25;
    const count = 40;
    const delay = 75;
    const strokeReg = 3;
    const dst = 10;
    const jellyChildren: number[] = [];

    for(let i = 0; i < numberOfChildren; i++) {
        jellyChildren.push(i);
    }

    const Jump = keyframes`
        40% {
            transform: ${`translate3d(0, ${dst * 2}px, 0) scale(1.3)`};
            opacity: .9;
        }
        40% {
            rx: ${dst}px;
            ry: ${dst}px;
            stroke-width: ${strokeReg}px;
        }
        45% {
            rx: ${dst + 5}px;
            ry: ${dst - 3}px;
            stroke-width: ${strokeReg + 1}px;
        }
        55% {
            rx: ${dst}px;
            ry: ${dst}px;
        }
    `;

    const Shadow = keyframes`
        45% {
            opacity: .15;
            rx: ${dst}px;
            ry: ${dst - 7}px;
            transform: ${`translate3d(0, ${dst - 10}px, 0) scale(1.3)`};
        }
    `;

    const SVG = styled('svg')`
        width: inherit;
        height: 80;
        position: absolute;

        ellipse {
            transform-origin: center;
            cx: 25;
            cy: 20;
            rx: 10;
            ry: 10;
            fill: none;
        }
    `;

    const renderCircles = () => {
        return jellyChildren.map((child, index) => {
            return (
                <SVG 
                    key={index}
                    viewBox='-30 0 255 80'
                    css={css`
                        ellipse {
                            stroke: ${colors ? `${colors[index]}` : `${dProps.colors[index]}`};
                            cx: ${left + (count * index)};
                            stroke-width: 3px;
                            opacity: .7;
                            animation: ${Jump} ${duration ? duration : dProps.duration}s infinite ease-in-out;
                            animation-delay: ${delay * index}ms;
                            animation-play-state: ${pause ? 'paused' : 'running'};
                        }
                    `}
                >
                    <ellipse></ellipse>
                </SVG>
            )
        })
    }

    const renderShadows = () => {
        return jellyChildren.map((child, index) => {
            return (
                <SVG 
                    key={index}
                    viewBox='-30 0 255 80'
                    css={css`
                        ellipse {
                            fill: #333333;
                            opacity: .5;
                            rx: 0;
                            ry: 0;
                            cx: ${left + (count * index)};
                            cy: 48px;
                            animation: ${Shadow} ${duration ? duration : dProps.duration}s infinite ease-in-out;
                            animation-delay: ${delay * index}ms;
                        }
                    `}
                >
                    <ellipse></ellipse>
                </SVG>
            )
        })
    }

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            {renderCircles()}
            {renderShadows()}
        </LoaderBox>
    )
}



export default JellyBounceLoader;