import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface SphereProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 40,
    duration: 1,
    color: Colors.Purple
}


const SphereLoader = (props: SphereProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const SphereAnim = keyframes`
        0%, 66% {
            border-left: 0px ${color ? `${color}` : `${dProps.color}`} solid;
            border-right: 0px ${color ? `${color}` : `${dProps.color}`} solid;
        }
        33% {
            border-left: 32px ${color ? `${color}` : `${dProps.color}`} solid;
            border-right: 0px ${color ? `${color}` : `${dProps.color}`} solid;
        }
        33.00001% {
            border-left: 0px ${color ? `${color}` : `${dProps.color}`} solid;
            border-right: 32px ${color ? `${color}` : `${dProps.color}`} solid;
        }
    `;

    const Sphere = styled('div')`
        width: inherit;
        height: inherit;
        border-radius: 50%;
        border-left: 0px ${color ? `${color}` : `${dProps.color}`} solid;
        border-right: 0px ${color ? `${color}` : `${dProps.color}`} solid;
        animation: ${SphereAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
        animation-play-state: ${pauseAnim(pause)};
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Sphere></Sphere>
        </LoaderBox>
    )
}

export default SphereLoader;