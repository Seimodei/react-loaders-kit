/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx} from '@emotion/core';

import { Colors } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';


export interface BlurrySquareProps {
    loading: boolean;
    boxNumber?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}


const dProps = {
    loading: true,
    boxNumber: 3,
    duration: 0.7,
    colors: [ Colors.Purple, Colors.Purple, Colors.Purple, Colors.Purple, Colors.Purple, Colors.Purple ]
}


const BlurrySquareLoader = (props: BlurrySquareProps) => {

    const {
        loading,
        pause,
        boxNumber,
        duration,
        colors,
    } = props;

    const numberOfChildren = boxNumber ? boxNumber : dProps.boxNumber;
    const drt = 0.7;

    const blurChildren: number[] = [];
    const t = drt/7;
    
    for(let i = 0; i < numberOfChildren; i++) {
        blurChildren.push(i);
    }

    const Blur = keyframes`
        50% {
            filter: blur(5px);
            transform: translateY(-10px);
            opacity: 0.3;
        }
    `;

    const Wrapper = styled('div')`
        width: inherit;
        height: inherit;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const Child = styled('div')`
        height: 11px;
        width: 11px;
        margin: 0 5px 0 0;
        opacity: 1;
        border-radius: 10%;
        animation: ${Blur} ${duration ? duration : dProps.duration}s infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;



    const renderChildren = () => {
        return blurChildren.map((item, index) => {
            return (
                <Child 
                    key={index} 
                    css={css`
                        animation-delay: ${`${t*index}s`};
                        background-color: ${colors ? `${colors[index]}` : `${dProps.colors[index]}`};
                    `}
                />
            )
        })
    };

    return (
        <LoaderBox size={100} loading={loading} dPropsSize={100}>
            <Wrapper>
                {renderChildren()}
            </Wrapper>
        </LoaderBox>
    )
}


export default BlurrySquareLoader;