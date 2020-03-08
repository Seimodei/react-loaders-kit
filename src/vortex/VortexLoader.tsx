import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface VortexProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 40,
    duration: 2,
    colors: [Colors.Purple, Colors.Purple]
}


const VortexLoader = (props: VortexProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const VortexAnim = keyframes`
        from { 
            transform: rotate(0deg); 
        }
        to { 
            transform: rotate(359deg); 
        }
    `;

    const Vortex = styled('div')`
        width: inherit;
        height: inherit;
        border: 1px ${colors ? `${colors[0]}` : `${dProps.colors[0]}`} solid;
        border-radius: 4px;
        overflow: hidden;
        position: relative;

        &:before, &:after {
            content: '';
            border-radius: 50%;
            position: absolute;
            width: inherit;
            height: inherit;
            animation: ${VortexAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
            animation-play-state: ${pauseAnim(pause)};
        }

        &:before {
            border-top: 15px ${colors ? `${colors[1]}` : `${dProps.colors[1]}`} solid;
            top: -3px;
            left: calc( -51% - 3px );
            transform-origin: right center;
        }

        &:after {
            border-bottom: 15px ${colors ? `${colors[1]}` : `${dProps.colors[1]}`} solid;
            top: 3px;
            right: calc( -50% - 3px );
            transform-origin: left center;
        }

    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Vortex></Vortex>
        </LoaderBox>
    )
}

export default VortexLoader;