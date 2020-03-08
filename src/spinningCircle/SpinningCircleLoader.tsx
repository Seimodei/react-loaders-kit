import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, convertToRgba } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface SpinningCircleLoaderProps {
    loading: boolean;
    colors?: string[];
    pause?: boolean;
    size?: number;
}

const dProps = {
    loading: true,
    size: 50,
    colors: [Colors.Purple, '#fafafa']
}


const SpinningCircleLoader = (props: SpinningCircleLoaderProps) => {

    const { 
        loading, 
        pause, 
        size,
        colors,
    } = props;

    const rgbDefaultColor = convertToRgba(dProps.colors[0], 10);

    const SpinningCircleLoaderAnimation = keyframes`
        from {
            transform: rotate(0);
        }
        to{
            transform: rotate(359deg);
        }
    `;

    const CircleBorder = styled('div')`
        width: inherit;
        height: inherit;
        padding: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        background: ${colors ? `linear-gradient(0deg, ${convertToRgba(colors[0], 10)} 33%, ${colors[0]} 100%)` : `linear-gradient(0deg, ${rgbDefaultColor} 33%, ${dProps.colors[0]} 100%)`};
        animation: ${SpinningCircleLoaderAnimation} .8s linear 0s infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const CircleCore = styled('div')`
        width: inherit;
        height: inherit;
        background-color: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        border-radius: 50%;
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <CircleBorder>
                <CircleCore></CircleCore>
            </CircleBorder>
        </LoaderBox>
    )
}


export default SpinningCircleLoader;