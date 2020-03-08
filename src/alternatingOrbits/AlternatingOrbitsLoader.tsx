import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, convertToRgba } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface AlternatingOrbitsProps {
    loading: boolean;
    pause?: boolean;
    size?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 50,
    colors: [Colors.Purple, Colors.Yellow]
}


const AlternatingOrbitsLoader = (props: AlternatingOrbitsProps) => {

    const { 
        loading, 
        pause, 
        size,
        colors
    } = props;

    const rgbDefaultColor1 = convertToRgba(dProps.colors[0], 10);
    const rgbDefaultColor2 = convertToRgba(dProps.colors[1], 10);

    const AlternatingOrbitsAnimation = keyframes`
        from {
            transform: rotate3d(.5,.5,.5, 360deg);
        }
        to{
            transform: rotate3d(0deg);
        }
    `;

    const Orbit1 = styled('div')`
        position: absolute;
        width: inherit;
        height: inherit;
        padding: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        background: ${colors ? `linear-gradient(0deg, ${convertToRgba(colors[0], 50)} 33%, ${colors[0]} 100%)` : `linear-gradient(0deg, ${rgbDefaultColor1} 33%, ${dProps.colors[0]} 100%)`};
        animation: ${AlternatingOrbitsAnimation} 1.8s linear 0s infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Orbit2 = styled('div')`
        position: absolute;
        width: inherit;
        height: inherit;
        padding: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        background: ${colors ? `linear-gradient(0deg, ${convertToRgba(colors[1], 50)} 33%, ${colors[1]} 100%)` : `linear-gradient(0deg, ${rgbDefaultColor2} 33%, ${dProps.colors[1]} 100%)`};
        animation: ${AlternatingOrbitsAnimation} 2.2s linear 0s infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const Core1 = styled('div')`
        width: 100%;
        height: 100%;
        background-color: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        opacity: 0.5;
        border-radius: 50%;
    `;

    const Core2 = styled('div')`
        width: 100%;
        height: 100%;
        background-color: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        opacity: 0.6;
        border-radius: 50%;
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Orbit1>
                <Core1></Core1>
            </Orbit1>
            <Orbit2>
                <Core2></Core2>
            </Orbit2>
        </LoaderBox>
    )
}

export default AlternatingOrbitsLoader;