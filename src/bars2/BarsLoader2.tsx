/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';



export interface BarsProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 40,
    duration: 1.5,
    color: Colors.Purple
}

const BarsLoader2 = (props: BarsProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const numberOfChildren = 5;
    const lineChildren: number[] = [];

    for(let i = 0; i < numberOfChildren; i++) {
        lineChildren.push(i);
    }

    const LineAnim = keyframes`
        0% {
            height: ${size ? `${size*0.125}px` : `${dProps.size*0.125}px`};
            transform: translateY(0px); 
        }
        25% {
            height: ${size ? `${size*0.5}px` : `${dProps.size*0.5}px`};
            transform: translateY(${size ? `${size*0.25}px` : `${dProps.size*0.25}px`};); 
        }
        50% {
            height: ${size ? `${size*0.125}px` : `${dProps.size*0.125}px`};
            transform: translateY(0px); 
        }
        100% {
            height: ${size ? `${size*0.125}px` : `${dProps.size*0.125}px`};
            transform: translateY(0px); 
        }
    `;

    const Loader = styled('div')`
        position: relative;
        display: ${loading ? 'flex' : 'none'};
    `;

    const Bar = styled('div')`
        width: ${size ? `${size*0.225}px` : `${dProps.size*0.225}px`};
        height: ${size ? `${size*0.125}px` : `${dProps.size*0.125}px`};
        background-color: ${color ? `${color}` : `${dProps.color}`};
        animation: ${LineAnim} ${loaderDuration(duration, dProps.duration)} infinite ease-in-out;
        animation-play-state: ${pauseAnim(pause)};
        margin: 1px;
    `;

    const renderBars = () => {
        return lineChildren.map((child, index) => {
            let time = index * 0.05;
            return (
                <Bar 
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
            {renderBars()}
        </Loader>
    )
}



export default BarsLoader2;