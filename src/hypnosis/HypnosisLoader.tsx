/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration, lightenDarkenColor } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface HypnosisProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 50,
    duration: 2,
    colors: ['#ffffff', Colors.Purple]
}


const HypnosisLoader = (props: HypnosisProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const Spin = keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(359deg);
        }
    `;

    const Circle = styled('div')`
        border-radius: 50%;
        box-sizing: border-box;
        border: 2px solid ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        animation: ${Spin} ${loaderDuration(duration, dProps.duration)} linear infinite;
        animation-play-state: ${pauseAnim(pause)};
    `;

    const lg = css`
        background-color: ${colors ? `${lightenDarkenColor(colors[1], 50)}` : `${lightenDarkenColor(dProps.colors[1], 50)}`};
        width: inherit;
        height: inherit;
    `;

    const md = css`
        background-color: ${colors ? `${lightenDarkenColor(colors[1], 20)}` : `${lightenDarkenColor(dProps.colors[1], 20)}`};
        width: ${size ? `${size-10}px` : `${dProps.size-10}px`}; 
        height: ${size ? `${size-10}px` : `${dProps.size-10}px`};
    `;

    const sm = css`
        background-color: ${colors ? `${lightenDarkenColor(colors[1], -20)}` : `${lightenDarkenColor(dProps.colors[1], -20)}`};
        width: ${size ? `${size-20}px` : `${dProps.size-20}px`}; 
        height: ${size ? `${size-20}px` : `${dProps.size-20}px`};
    `;

    const smlr = css`
        background-color: ${colors ? `${lightenDarkenColor(colors[1], -50)}` : `${lightenDarkenColor(dProps.colors[1], -50)}`};
        width: ${size ? `${size-30}px` : `${dProps.size-30}px`}; 
        height: ${size ? `${size-30}px` : `${dProps.size-30}px`};
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Circle css={lg}>
                <Circle css={md}>
                    <Circle css={sm}>
                        <Circle css={smlr}></Circle>
                    </Circle>
                </Circle>
            </Circle>
        </LoaderBox>
    )
}

export default HypnosisLoader;