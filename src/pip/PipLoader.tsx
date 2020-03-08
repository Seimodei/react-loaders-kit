/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface PipProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 15,
    duration: .8,
    color: Colors.Purple
}

const PipLoader = (props: PipProps) => {

    const {
        loading,
        pause,
        size,
        duration,
        color,
    } = props;

    const numberOfChildren = 7;
    const PipChildren: number[] = [];

    for(let i = 0; i < numberOfChildren; i++) {
        PipChildren.push(i);
    }

    const PipAnim = keyframes`
        0%, 15%, 85%, 100% {
            transform: translateY(${size ? `${size*0.0001}px` : `${dProps.size*0.0001}px`});
            box-shadow: 0 0 0 1px ${color ? color : dProps.color};
        }
        45%, 55% {
            transform: translateY(0px);
            box-shadow: 0 0 0 ${size ? `${size*0.42}px` : `${dProps.size*0.42}px`} ${color ? color : dProps.color};
        }
    `;

    const Pip = styled('div')`
        position: absolute;
        width: ${size ? `${size}px` : `${dProps.size}px`};
        height: ${size ? `${size*5}px` : `${dProps.size*5}px`};
            
        &:before {
            content: '';
            position: absolute;
            top: ${size ? `${size*0.75}px` : `${dProps.size*0.75}px`};
            left: 0;
            width: ${size ? `${size}px` : `${dProps.size}px`};
            height: ${size ? `${size}px` : `${dProps.size}px`};
            box-shadow: 0 0 0 1px ${color ? color : dProps.color};
            border-radius: 50%;
            background: ${color ? color : dProps.color};
            animation: ${PipAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
            animation-play-state: ${pauseAnim(pause)};
        }
        
    `;

    const renderPip = () => {
        return PipChildren.map((child, index) => {
            return (
                <Pip 
                    key={index}
                    css={css`
                        transform: rotateZ(${(360 / numberOfChildren) * (index - 1) + (360 / numberOfChildren /3)}deg);

                        &:before {
                            animation-delay: ${duration ? (duration / numberOfChildren) * (index - 1) : (dProps.duration / numberOfChildren) * (index - 1)}s;
                        }
                    `}
                />
            )
        })
    }

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
                {renderPip()}
        </LoaderBox>
    )
}



export default PipLoader;