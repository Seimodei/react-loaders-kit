/** @jsx jsx */
import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';


export interface PulseBubbleProps {
    loading: boolean;
    pause?: boolean;
    size?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 55,
    colors: [Colors.Purple, Colors.Purple, Colors.Purple]
}


const PulseBubbleLoader = (props: PulseBubbleProps) => {

    const { 
        loading, 
        pause, 
        size,
        colors
    } = props;

    const bubbleConfig = (loaderSize: number) => {
        if (loaderSize < 80 && loaderSize > 60) {
            return 15;
        } else if (loaderSize < 60) {
            return 11;
        }
        return 20;
    }

    const PulseAnimation = keyframes`
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: .25;
            transform: scale(.75);
        }
    `;

    const PulseContainer = styled('div')`
        width: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const PulseBubble = styled('div')`
        width: ${size ? `${bubbleConfig(size)}px` : `${bubbleConfig(dProps.size)}px`};
        height: ${size ? `${bubbleConfig(size)}px` : `${bubbleConfig(dProps.size)}px`};
        border-radius: 50%;
    `;

    const Bubble1 = css`
        background-color: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        animation: ${PulseAnimation} .4s ease 0s infinite alternate;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Bubble2 = css`
        background-color: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        animation: ${PulseAnimation} .4s ease .1s infinite alternate;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Bubble3 = css`
        background-color: ${colors ? `${colors[2]}` : `${dProps.colors[2]}`};
        animation: ${PulseAnimation} .4s ease .2s infinite alternate;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <PulseContainer>
                <PulseBubble css={Bubble1}></PulseBubble>
                <PulseBubble css={Bubble2}></PulseBubble>
                <PulseBubble css={Bubble3}></PulseBubble>
            </PulseContainer>
        </LoaderBox>
    )
}



export default PulseBubbleLoader;