import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface SwingingCubeProps {
    loading: boolean;
    size?: number;
    duration?: number;
    pause?: boolean;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 18,
    duration: 1,
    colors: [Colors.Purple, Colors.Purple, Colors.Purple]
}


const SwingingCubeLoader = (props: SwingingCubeProps) => {

    const {
        loading,
        size,
        duration,
        pause,
        colors,
    } = props;

    const margin = 1;

    const Swing = keyframes`
        25%, 50%{
            transform: translate(-50%, -50%) rotate(45deg);
        }
        75%{
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    `;

    const Roll = keyframes`
        33%{
            transform: rotate(0deg);
        }
        67%,100%{
            transform: rotate(90deg);
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
        width: ${size ? `${3*size+margin*5}px` : `${3*dProps.size+margin*5}px`};
        height: ${size ? `${3*size+margin*5}px` : `${3*dProps.size+margin*5}px`};
        border-radius: 100%;
        color: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        border: ${margin}px solid;
        transform: translate(-50%, -50%) rotate(-45deg);
        animation-name: ${Swing};
        animation-duration: ${duration ? duration*2 : dProps.duration*2}s;
        animation-iteration-count: infinite;
        animation-play-state: ${pauseAnim(pause)};

        &:before, &:after {
            content: "";
            position: absolute;
            bottom:  ${size ? `${(margin)+(size*.5)}px` : `${(margin)+(dProps.size*.5)}px`};
            width: ${size ? `${size}px` : `${dProps.size}px`}; 
            height: ${size ? `${size}px` : `${dProps.size}px`};
            background: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
            border-radius: ${margin*2}px;
        }

        &:before{
            left: ${size ? `${(margin)+(size*.5)}px` : `${(margin)+(dProps.size*.5)}px`};
        }
        
        &:after{
            right: ${size ? `${(margin)+(size*.5)}px` : `${(margin)+(dProps.size*.5)}px`};
        }
    `;

    const Box = styled('div')`
        position: absolute;
        width: ${size ? `${size}px` : `${dProps.size}px`}; 
        height: ${size ? `${size}px` : `${dProps.size}px`};
        left: ${size ? `${(margin)+(size*.5)}px` : `${(margin)+(dProps.size*.5)}px`};
        top: ${size ? `${(margin)+(size*.5)}px` : `${(margin)+(dProps.size*.5)}px`};
        background: ${colors ? `${colors[2]}` : `${dProps.colors[2]}`};
        transform-origin: ${size ? `${(size)+(margin*.5)}px ${(size)+(margin*.5)}px` : `${(dProps.size)+(margin*1.5)}px ${(dProps.size)+(margin*1.5)}px`};
        border-radius: ${margin*2}px;
        animation-name: ${Roll};
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
        animation-duration: ${duration ? duration : dProps.duration}s;
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

export default SwingingCubeLoader;