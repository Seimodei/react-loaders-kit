import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface HydrogenProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 45,
    duration: 0.6,
    colors: [Colors.Purple, Colors.Purple]
}


const HydrogenLoader = (props: HydrogenProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const HydrogenAnim = keyframes`
        from { transform: rotate(0deg); }
        to { transform: rotate(359deg); }
    `;

    const Hydrogen = styled('div')`
        width: inherit;
        height: inherit;
        position: relative;
        border: 1px ${colors ? `${colors[0]}` : `${dProps.colors[0]}`} solid;
        border-radius: 50%;
        animation: ${HydrogenAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
        animation-play-state: ${pauseAnim(pause)};

        &:before, &:after {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
            border-radius: 50%;
        }

        &:before {
            top: calc( 50% - 5px );
	        left: calc( 50% - 5px );
        }

        &:after {
            top: 1px;
	        left: 1px;
        }

    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Hydrogen></Hydrogen>
        </LoaderBox>
    )
}

export default HydrogenLoader;