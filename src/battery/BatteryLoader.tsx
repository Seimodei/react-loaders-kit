import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface BatteryProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 50,
    duration: .7,
    color: Colors.Purple
}


const BatteryLoader = (props: BatteryProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const BatteryAnim = keyframes`
        from { background-position: 0px 0px; }
        to { background-position: -${dProps.size*0.4}px 0px; }
    `;
    
    const Battery = styled('div')`
        width: inherit;
        height: ${size ? `${size*0.36}px` : `${dProps.size*0.36}px`};
        border: 1px ${color ? `${color}` : `${dProps.color}`} solid;
        border-radius: 4px;
        position: relative;
        background: linear-gradient(-60deg, transparent 0%, transparent 50%, ${color ? `${color}` : `${dProps.color}`} 50%, ${color ? `${color}` : `${dProps.color}`} 75%, transparent 75%, transparent);
        background-size: ${dProps.size*0.4}px ${dProps.size*0.6}px;
        background-position: 0% 0%;
        animation: ${BatteryAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
        animation-play-state: ${pauseAnim(pause)};
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Battery></Battery>
        </LoaderBox>
    )
}

export default BatteryLoader;