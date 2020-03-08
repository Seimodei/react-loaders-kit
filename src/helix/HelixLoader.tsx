/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';


export interface HelixLoaderProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
    numberOfDots?: number;
}

const dProps = {
    loading: true,
    size: 90,
    duration: 1.5,
    colors: [Colors.Purple, Colors.Yellow],
    numberOfDots: 10
}



const HelixLoader = (props: HelixLoaderProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
        numberOfDots
    } = props;

    const customSize = size ? size : dProps.size;
    const dots = numberOfDots ? numberOfDots : dProps.numberOfDots;
    const time = duration ? duration : dProps.duration;
    const delay = 0.1;
    const padding = 0.6;

    const numberOfDot: number[] = [];

    for(let i = 0; i < dots; i++) {
        numberOfDot.push(i);
    }


    const DnaRotate = keyframes`
        0%   { 
            opacity: 1;
            transform: scale(1);
            left:40%;
            z-index: 0;
        }
        25%  { 
            opacity: 1;
            transform: scale(1.8);
        }
        50%  { 
            opacity: 1;
            left:60%; 
            z-index: 1; 
            transform: scale(1);
        }
        75%  {
            opacity: 1;
            transform: scale(0.5);
        }
        100% {
            opacity: 1;
            left:40%;  
            z-index: 0;
            transform: scale(1);
        }
    `;

    const Loader = styled('div')`
        position: absolute;
        width: inherit;
        height: inherit;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(-90deg) scaleX(-1);
    `;

    const Dot = styled('div')`
        position: absolute;
        left: 0;
        width: ${0.09*customSize}px;
        height: ${0.09*customSize}px;
        border-radius: 50%;
        opacity: 0;
    `;

    const renderDots = () => {
        return numberOfDot.map((child, index) => {
            return (
                <Dot 
                    key={index}
                    css={css`
                        top: ${index * padding}rem;
                        background-color: ${
                            index % 2 === 0 ?
                            `${colors ? `${colors[1]}` : `${dProps.colors[1]}`}` :
                            `${colors ? `${colors[0]}` : `${dProps.colors[0]}`}`
                        };
                        animation: ${
                            index % 2 === 0 ?
                            css`${DnaRotate} ${time}s ${index * delay}s infinite ease-in-out` :
                            css`${DnaRotate} ${time}s ${index * delay + time / 2}s infinite ease-in-out`
                        };
                        animation-play-state: ${pauseAnim(pause)};
                    `}
                />
            )
        })
    }

    return (
        <LoaderBox size={customSize} loading={loading} dPropsSize={dProps.size}>
            <Loader>
                {renderDots()}
            </Loader>
        </LoaderBox>
    )
}


export default HelixLoader;