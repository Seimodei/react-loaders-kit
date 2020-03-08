import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface VolumeProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 35,
    duration: .6,
    colors: [Colors.Purple, '#ffffff']
}


const VolumeLoader = (props: VolumeProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const VolumeAnim = keyframes`
        from { 
            transform: rotate(0deg); 
        }
        to { 
            transform: rotate(359deg); 
        }
    `;

    const Volume = styled('div')`
        width: inherit;
        height: inherit;
        background-color: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        border-radius: 100px;
        position: relative;
        animation: ${VolumeAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
        animation-play-state: ${pauseAnim(pause)};

        &:after {
            margin: 1px;
            content: '';
            border-radius: 100px;
            position: absolute;
            display: block;
            width: 10px;
            height: 10px;
            left: 5px;
            top: 5px;
            background-color: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        }

    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Volume></Volume>
        </LoaderBox>
    )
}

export default VolumeLoader;