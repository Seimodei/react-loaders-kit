import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface BrokenCirclesProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 40,
    colors: [Colors.Purple, Colors.Purple, Colors.Purple, Colors.Purple]
}


const BrokenCirclesLoader = (props: BrokenCirclesProps) => {

    const {
        loading,
        size,
        pause,
        colors,
    } = props;

    const BrokenCirclesAnim = keyframes`
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    `;

    const BrokenCircles = styled('div')`
        position: absolute;
        width: inherit;
        height: inherit;

        div {
            &:nth-of-type(1) {
                animation: ${BrokenCirclesAnim} 4s infinite linear;
                animation-play-state: ${pauseAnim(pause)};
                width: inherit;
                height: inherit;
                border-radius: 100%;
                border-left: 5px solid transparent;
                border-bottom: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 5px solid ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
                position: absolute;
            }

            &:nth-of-type(2) {
                width: ${size ? `${size*0.8}px` : `${dProps.size*0.8}px`};
                height: ${size ? `${size*0.8}px` : `${dProps.size*0.8}px`};
                border-radius: 100%;
                border-left: 5px solid transparent;
                border-bottom: 5px solid ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
                border-right: 5px solid transparent;
                border-top: 5px solid transparent;
                animation: ${BrokenCirclesAnim} 3s infinite reverse linear;
                animation-play-state: ${pauseAnim(pause)};
                position: absolute;
                top: 5px;
                left: 5px;
            }

            &:nth-of-type(3) {
                width: ${size ? `${size*0.6}px` : `${dProps.size*0.6}px`};
                height: ${size ? `${size*0.6}px` : `${dProps.size*0.6}px`};
                border-radius: 100%;
                border-left: 5px solid transparent;
                border-top: 5px solid ${colors ? `${colors[2]}` : `${dProps.colors[2]}`};
                border-right: 5px solid transparent;
                border-bottom: 5px solid transparent;
                animation: ${BrokenCirclesAnim} 2s infinite linear;
                animation-play-state: ${pauseAnim(pause)};
                position: absolute;
                top: 10px;
                left: 10px;
            }

            &:nth-of-type(4) {
                width: ${size ? `${size*0.4}px` : `${dProps.size*0.4}px`};
                height: ${size ? `${size*0.4}px` : `${dProps.size*0.4}px`};
                border-radius: 100%;
                border-left: 5px solid transparent;
                border-bottom: 5px solid ${colors ? `${colors[3]}` : `${dProps.colors[3]}`};
                border-right: 5px solid transparent;
                border-top: 5px solid transparent;
                animation: ${BrokenCirclesAnim} 1s infinite reverse linear;
                animation-play-state: ${pauseAnim(pause)};
                position: absolute;
                top: 15px;
                left: 15px;
            }
        }
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <BrokenCircles>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </BrokenCircles>
        </LoaderBox>
    )
}

export default BrokenCirclesLoader;