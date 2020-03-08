/** @jsx jsx */

import React from 'react';
import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';
import { Colors } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface SpinningOrbitProps {
    loading: boolean;
    pause?: boolean;
    size?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 50,
    colors: [Colors.Purple, Colors.Purple, Colors.Purple, Colors.Purple]
}


const SpinningOrbitLoader = (props: SpinningOrbitProps) => {

    const {
        loading,
        size,
        colors,
        pause
    } = props;

    const Spin3DAnimation = keyframes`
        from {
            transform: rotate3d(.5,.5,.5, 360deg);
        }
        to{
            transform: rotate3d(0deg);
        }
    `;

    const Leo= css`
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    `;

    const Orbit1 = styled('div')`
        width: inherit;
        height: inherit;
        border: ${colors ? `1px solid ${colors[0]}` : `1px solid ${dProps.colors[0]}`};
        animation: ${Spin3DAnimation} 3s linear .2s infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Orbit2 = styled('div')`
        width: 73%;
        height: 73%;
        border: ${colors ? `1px solid ${colors[1]}` : `1px solid ${dProps.colors[1]}`};
        animation: ${Spin3DAnimation} 2s linear 0s infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Orbit3 = styled('div')`
        width: 55%;
        height: 55%;
        border: ${colors ? `1px solid ${colors[2]}` : `1px solid ${dProps.colors[2]}`};
        animation: ${Spin3DAnimation} 1s linear 0s infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Orbit4 = styled('div')`
        width: 40%;
        height: 40%;
        border: ${colors ? `1px solid ${colors[3]}` : `1px solid ${dProps.colors[3]}`};
        animation: ${Spin3DAnimation} 10s linear 0s infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const W1= css`
        transform: rotate3D(1, 1, 1, 90deg)
    `;

    const W2= css`
        transform: rotate3D(1, 2, .5, 90deg)
    `;

    const W3= css`
        transform: rotate3D(.5, 1, 2, 90deg)
    `;


    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Orbit1 css={Leo}></Orbit1>
            <Orbit2 css={Leo}></Orbit2>
            <Orbit3 css={Leo}></Orbit3>
            <Orbit4 css={[W1, Leo]}></Orbit4>
            <Orbit4 css={[W2, Leo]}></Orbit4>
            <Orbit4 css={[W3, Leo]}></Orbit4>
        </LoaderBox>
    )
}


export default SpinningOrbitLoader;


