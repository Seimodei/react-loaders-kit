/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';


export interface LinneardLoaderProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 130,
    duration: .8,
    colors: [Colors.Purple, Colors.Pink]
}



const LinneardLoader = (props: LinneardLoaderProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const customSize = size ? size : dProps.size;
    const dots = 23;

    const cellR = customSize*.3;
    const dotR = customSize*.05;

    const da = 360/dots;
    const dur = duration ? duration : dProps.duration;
    const ddur = dur/dots;

    const numberOfDots: number[] = [];

    for(let i = 0; i < dots; i++) {
        numberOfDots.push(i);
    }


    const LinneardAnim = keyframes`
        to {
            top: 100%;
            transform: scale(.5);
            background-color: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        }
    `;

    const Wrapper = styled('div')`
        position: relative;
        overflow: hidden;
        position: relative;
        width: inherit;
        height: inherit;
        flex-grow: 1;
        padding: ${customSize*.5}px;
    `;

    const Loader = styled('div')`
        position: absolute;
        top: 50%;
        left: 50%;
    `;

    const Dot = styled('div')`
        position: absolute;
        top: ${-1*cellR}px;
        height: ${cellR*2}px;

        &:after {
            content: "";
            position: absolute;
            top: 0;
            transform: translateX(-50%) translateY(-50%);
            width: ${dotR}px;
            height: ${dotR}px;
            background-color: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
            border-radius: 100%;
            transform: scale(1);
            animation: ${LinneardAnim} ${dur}s infinite alternate;
            animation-play-state: ${pauseAnim(pause)};
        }
    `;

    const renderDots = () => {
        return numberOfDots.map((child, index) => {
            return (
                <Dot 
                    key={index}
                    css={css`
                        transform: ${`rotate(${da*index}deg)`};

                        &:after {
                            animation-delay: ${ddur*index*2}s;
                            animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
                        }
                    `}
                />
            )
        })
    }

    return (
        <LoaderBox size={customSize} loading={loading} dPropsSize={dProps.size}>
            <Wrapper>
                <Loader>
                    {renderDots()}
                </Loader>
            </Wrapper>
        </LoaderBox>
    )
}


export default LinneardLoader;