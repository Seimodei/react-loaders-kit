import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface SwitchingCubeProps {
    loading: boolean;
    size?: number;
    duration?: number;
    pause?: boolean;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 20,
    duration: 1,
    colors: [Colors.Purple, Colors.Purple, Colors.Purple]
}


const SwitchingCubeLoader = (props: SwitchingCubeProps) => {

    const {
        loading,
        size,
        duration,
        pause,
        colors,
    } = props;

    const margin = 1;

    const Switch = keyframes`
        to{
            transform: translate(-50%, -50%) rotate(-405deg);
        }
    `;

    const Slide = keyframes`
        33% {
            left: ${margin}px;
        }
        67%,100% {
            left: ${size ? `${margin*2 + size + 2}px` : `${margin*2 + dProps.size + 2}px`};
        }
    `;

    const Wrapper = styled('div')`
        position: relative;
        width: ${size ? `${size * 5}px` : `${dProps.size * 5}px`};
        height: ${size ? `${size * 5}px` : `${dProps.size * 5}px`};
        flex-shrink: 1;
        flex-grow: 1;
    `;

    const Loader = styled('div')`
        position: absolute;
        top: 50%;
        left: 50%;
    `;

    const Block = styled('div')`
        border-radius: ${margin * 2}px;
        width: ${size ? `${2*size+margin*5}px` : `${2*dProps.size+margin*5}px`};
        height: ${size ? `${2*size+margin*5}px` : `${2*dProps.size+margin*5}px`};
        position: absolute;
        color: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        border: ${margin}px solid;
        transform: translate(-50%, -50%) rotate(-45deg);
        animation-name: ${Switch};
        animation-timing-function: steps(4);
        animation-duration: ${duration ? `${2*duration}s` : `${2*dProps.duration}s`};
        animation-iteration-count: infinite;
        animation-play-state: ${pauseAnim(pause)};

        &:before, &:after {
            content: "";
            position: absolute;
            bottom: ${margin}px;
            width: ${size ? `${size}px` : `${dProps.size}px`}; 
            height: ${size ? `${size}px` : `${dProps.size}px`};
            background: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
            border-radius: ${margin*2}px;
        }

        &:before{
            left: ${margin}px;
        }
        
        &:after{
            right: ${margin}px;
        }
    `;

    const Box = styled('div')`
        position: absolute;
        width: ${size ? `${size}px` : `${dProps.size}px`}; 
        height: ${size ? `${size}px` : `${dProps.size}px`};
        left: ${margin}px;
        top: ${margin}px;
        background: ${colors ? `${colors[2]}` : `${dProps.colors[2]}`};;
        border-radius: ${margin*2}px;
        animation-name: ${Slide};
        animation-timing-function: ease-in-out;
        animation-duration: ${duration ? `${.5*duration}s` : `${.5*dProps.duration}s`};
        animation-iteration-count: infinite;
        animation-play-state: ${pauseAnim(pause)};
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Wrapper>
                <Loader>
                    <Block>
                        <Box></Box>
                    </Block>
                </Loader>
            </Wrapper>
        </LoaderBox>
    )
}

export default SwitchingCubeLoader;