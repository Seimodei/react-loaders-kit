import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration, loaderColor } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface BlobProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 40,
    duration: 1.3,
    color: Colors.Purple
}


const BlobLoader = (props: BlobProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const BlobBottom = keyframes`
        5%, 50%, 75% {
            top: 50%;
            left: 100%;
        }
        100% {
            top: 0;
            left: 50%;
        }
    `;

    const BlobLeft = keyframes`
        25% {
            top: 50%;
            left: 0;
        }
        50%, 100% {
            top: 100%;
            left: 50%;
        }
    `;

    const BlobTop = keyframes`
        50% {
            top: 0;
            left: 50%;
        }
        75%, 100% {
            top: 50%;
            left: 0;
        }
    `;

    const BlobMover = keyframes`
        0%, 100% {
            top: 0;
            left: 50%;
        }
        25% {
            top: 50%;
            left: 100%;
        }
        50% {
            top: 100%;
            left: 50%;
        }
        75% {
            top: 50%;
            left: 0;
        }
    `;

    const Loader = styled('div')`
        position: absolute;
        width: inherit;
        height: inherit;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

    const Blob = styled('div')`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid ${loaderColor(color, dProps.color)};
        width: ${size ? size*0.33 : dProps.size*0.33}px;
        height: ${size ? size*0.33 : dProps.size*0.33}px;
        border-radius: 50%;
        
        &:nth-of-type(1) {
            top: 0;
            animation: ${BlobTop} ${loaderDuration(duration, dProps.duration)} infinite ease-in;
            animation-play-state: ${pauseAnim(pause)};
        }
    
        &:nth-of-type(2) {
            top: 100%;
            animation: ${BlobBottom} ${loaderDuration(duration, dProps.duration)} infinite ease-in;
            animation-play-state: ${pauseAnim(pause)};
        }
        
        &:nth-of-type(3) {
            left: 0;
            animation: ${BlobLeft} ${loaderDuration(duration, dProps.duration)} infinite ease-in;
            animation-play-state: ${pauseAnim(pause)};
        }

        &:nth-of-type(4) {
            background: ${loaderColor(color, dProps.color)};
            top: 0;
            animation: ${BlobMover} ${loaderDuration(duration, dProps.duration)} infinite ease-in;
            animation-play-state: ${pauseAnim(pause)};
        }
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Loader>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
                <Blob></Blob>
            </Loader>
        </LoaderBox>
    )
}

export default BlobLoader;