/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim, lightenDarkenColor } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface FlippingCubeProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 35,
    colors: [Colors.Purple, Colors.Purple, Colors.Purple, Colors.Purple]
}


const FlippingCubeLoader = (props: FlippingCubeProps) => {

    const {
        loading,
        size,
        pause,
        colors,
    } = props;

    const FlippingCubeAnim = keyframes`
    0%, 10% {
        transform: perspective(140px) rotateX(-180deg);
        opacity: 0;
      }
      25%, 75% {
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
      }
      90%, 100% {
        transform: perspective(140px) rotateY(180deg);
        opacity: 0;
      }
    `;

    const Wrapper = styled('div')`
        width: inherit;
        height: inherit;
        display: inline-block;
        transform: rotate(45deg);
    `;

    const Cube = styled('span')`
        position: relative;
        width: ${size ? `${size/2}px` : `${dProps.size/2}px`}; 
        height: ${size ? `${size/2}px` : `${dProps.size/2}px`};
        transform: scale(1.1);
        display: inline-block;

        &:before {
            content: '';
            background-color: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
            display: block;
            width: ${size ? `${size/2}px` : `${dProps.size/2}px`}; 
            height: ${size ? `${size/2}px` : `${dProps.size/2}px`};
            transform-origin: 100% 100%;
            animation: ${FlippingCubeAnim} 2.5s infinite linear both;
            animation-play-state: ${pauseAnim(pause)};
        }
    `;

    const Cube2 = css`
        transform: rotateZ(90deg) scale(1.1);

        &:before{
            animation-delay: 0.3s;
            background-color: ${colors ? `${lightenDarkenColor(colors[1], -10)}` : `${lightenDarkenColor(dProps.colors[1], -10)}`};
        }
    `;

    const Cube3 = css`
        transform: rotateZ(270deg) scale(1.1);

        &:before{
            animation-delay: 0.9s;
            background-color: ${colors ? `${lightenDarkenColor(colors[2], -10)}` : `${lightenDarkenColor(dProps.colors[2], -10)}`};
        }
    `;

    const Cube4 = css`
        transform: rotateZ(180deg) scale(1.1);

        &:before{
            animation-delay: 0.6s;
            background-color: ${colors ? `${lightenDarkenColor(colors[3], -20)}` : `${lightenDarkenColor(dProps.colors[3], -20)}`};
        }
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Wrapper>
                <Cube></Cube>
                <Cube css={Cube2}></Cube>
                <Cube css={Cube3}></Cube>
                <Cube css={Cube4}></Cube>
            </Wrapper>
        </LoaderBox>
    )
}

export default FlippingCubeLoader;