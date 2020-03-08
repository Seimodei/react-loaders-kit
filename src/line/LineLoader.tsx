/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';



export interface LineProps {
    loading: boolean;
    lineWidth?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    lineWidth: 25,
    duration: 2,
    color: Colors.Purple
}

const LineLoader = (props: LineProps) => {

    const {
        loading,
        pause,
        lineWidth,
        duration,
        color,
    } = props;

    const numberOfChildren = lineWidth ? lineWidth : dProps.lineWidth;
    const lineChildren: number[] = [];

    for(let i = 0; i < numberOfChildren; i++) {
        lineChildren.push(i);
    }

    const LineAnim = keyframes`
        0% { 
            transform: scale(1);
        }
        50% {
            background-color: ${color ? `${color}` : `${dProps.color}`};
            opacity: 1;
            transform: scale(3);
        }
        100% { 
            transform: scale(1);
        }
    `;

    const Loader = styled('div')`
        height: 2px;
        display: ${loading ? 'flex' : 'none'};
    `;

    const Line = styled('div')`
        animation: ${loaderDuration(duration, dProps.duration)} ease infinite ${LineAnim};
        animation-play-state: ${pauseAnim(pause)};
        background-color: ${color ? `${color}` : `${dProps.color}`};
        border-radius: 0;
        display: inline-block;
        height: 100%;
        opacity: 0;
        transform: scale(1);
        vertical-align: top;
        width: 5px;
    `;

    const renderLine = () => {
        return lineChildren.map((child, index) => {
            let time = index * 0.05;
            return (
                <Line 
                    key={index}
                    css={css`
                        animation-delay: ${time}s;
                    `}
                />
            )
        })
    }

    return (
        <Loader>
            {renderLine()}
        </Loader>
    )
}



export default LineLoader;