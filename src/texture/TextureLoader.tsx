import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface TextureProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 40,
    duration: .7,
    color: Colors.Purple
}


const TextureLoader = (props: TextureProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const TextureAnim = keyframes`
        from { background-position: 0px 0px; }
        to { background-position: -16px 0px; }
    `;

    const Texture = styled('div')`
        width: inherit;
        height: inherit;
        border: 1px ${color ? `${color}` : `${dProps.color}`} solid;
        border-radius: 4px;
        position: relative;
        background: linear-gradient(45deg, transparent 49%, ${color ? `${color}` : `${dProps.color}`} 50%, ${color ? `${color}` : `${dProps.color}`} 50%, transparent 51%, transparent),
                    linear-gradient(-45deg, transparent 49%, ${color ? `${color}` : `${dProps.color}`} 50%, ${color ? `${color}` : `${dProps.color}`} 50%, transparent 51%, transparent);
        background-size: 16px 16px;
        background-position: 0% 0%;
        animation: ${TextureAnim} ${loaderDuration(duration, dProps.duration)} infinite linear;
        animation-play-state: ${pauseAnim(pause)};
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Texture></Texture>
        </LoaderBox>
    )
}

export default TextureLoader;