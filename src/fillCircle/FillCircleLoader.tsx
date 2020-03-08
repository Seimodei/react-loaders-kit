/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';


export interface FillCircleProps {
    loading: boolean;
    pause?: boolean;
    size?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 60,
    colors: [Colors.Purple, Colors.Purple]
}


const FillCircleLoader = (props: FillCircleProps) => {

    const { 
        loading, 
        pause, 
        size,
        colors
    } = props;

    const loaderSize = 40;
    const itemloaderSize = 10;
    let dur = 3.2;
    let rot = 0;
    let del = 0;

    const items: number[] = [];

    for(let i = 0; i < 8; i++) {
        items.push(i);
    }

    const anim = (index: number) => {
        const animation = keyframes`
            0%, 60%, 100% {
                transform: rotate(${rot}deg) translateX(${loaderSize}px) scale(1);
            }
            10%, 50% {
                transform: rotate(${rot}deg) translateX(0) scale(1.5);
            }
        `;
        return animation;
    }


    const CenterAnim = keyframes`
        0%, 10%, 90%, 100% {
            transform: scale(0.7);
        }
        45%, 55% {
            transform: scale(1.3);
        }
    `;

    const Loader = styled('div')`
        position: absolute;
        width: inherit;
        height: inherit;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)  scale(${size ? `${size/100}` : `${dProps.size/100}`});
    `;

    const Center = styled('div')`
        width: inherit;
        height: inherit;
        background:  ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        border-radius: 50%;
        animation: ${CenterAnim} ${dur}s ease-in-out infinite;
        animation-play-state: ${pauseAnim(pause)};
        position: relative;
        z-index: 3;
    `;

    const Item = styled('div')`
        position: absolute;
        width: 15px;
        height: 15px;
        top: ${(loaderSize - itemloaderSize) /2}px;
        left: 0;
        right: 0;
        margin: auto;
        background:  ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        border-radius: 50%;
        z-index: 2;
    `;

    const renderItems = () => {
        return items.map((item, i) => {
            del = del + 0.2;
            rot = rot + 45;
            return (
                <Item 
                    key={i}
                    css={css`
                        animation: ${anim(i)} ${dur}s ease-in-out infinite ${del}s;
                        animation-fill-mode: backwards;
                        animation-play-state: ${pauseAnim(pause)};
                        backface-visibility: hidden;
                        transform: translateZ(0);
                    `}
                />
            )
    })};



    return (
        <LoaderBox size={40} loading={loading} dPropsSize={40}>
            <Loader>
                <Center></Center>
                {renderItems()}
            </Loader>
        </LoaderBox>
    )
}



export default FillCircleLoader;