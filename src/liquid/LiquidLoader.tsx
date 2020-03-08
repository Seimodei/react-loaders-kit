import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';

export interface LiquidLoaderProps {
    loading: boolean;
    color?: string;
    pause?: boolean;
    size?: number | undefined;
    duration?: number;
}

const dProps = {
    loading: true,
    size: 40,
    color: Colors.Purple,
    duration: 2
}


const LiquidLoader = (props: LiquidLoaderProps) => {

    const { 
        loading, 
        pause, 
        size,
        color,
        duration
    } = props;

    const LiquidAnim = keyframes`
        0% {
            transform: rotate( 0deg );
        }
            
        100% {
            transform: rotate( 360deg );
        }
        
    `;

    const liquidSize = 100;

    const DIV = styled('div')`
        transform: scale(${size ? size/100 : dProps.size/100});
    `;

    const Loader = styled('div')`
        position: absolute;
        margin: -${liquidSize/2}px 0 0 -${liquidSize/2}px;
        border: ${liquidSize*0.1}px solid ${Colors.Purple};
        box-sizing: border-box;
        overflow: hidden;
        width: ${liquidSize}px;
        height: ${liquidSize}px;
        left: 50%;
        top: 50%;
        animation: ${LiquidAnim} ${duration ? `${duration}s` : `${dProps.duration}s`} linear infinite reverse;
        animation-play-state: ${pause ? 'paused' : 'running'};
        filter: url(#goo);
        box-shadow: 0 0 0 1px ${color ? `${color}` : `${dProps.color}`} inset;

        &:before {
            content: "";
            position: absolute;
            animation: ${LiquidAnim} ${duration ? `${duration}s` : `${dProps.duration}s`} cubic-bezier(.59,.25,.4,.69) infinite;
            animation-play-state: ${pause ? 'paused' : 'running'};
            background: ${color ? `${color}` : `${dProps.color}`};
            transform-origin: top center;
            border-radius: 50%;
            width: 150%;
            height: 150%;
            top: 50%;
            left: -12.5%;
        }
    `;

    return (
        <LoaderBox size={100} loading={loading} dPropsSize={100}>
            <DIV>
                <Loader>
                    <svg>
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2" result="gooey" />
                                <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
                            </filter>
                        </defs>
                    </svg>
                </Loader>
            </DIV>
        </LoaderBox>
    )
}

export default LiquidLoader;