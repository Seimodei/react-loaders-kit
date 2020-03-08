/** @jsx jsx */
import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, loaderColor } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface GooeyLoader2Props {
    loading: boolean;
    size?: number;
    pause?: boolean;
    color?: string;
}

const dProps = {
    loading: true,
    size: 60,
    color: Colors.Purple
}


const GooeyLoader2 = (props: GooeyLoader2Props) => {

    const {
        loading,
        size,
        pause,
        color,
    } = props;

    const Sideways = keyframes`
        33% {
            transform: translateX(20px);
        }
        66% {
            transform: translateX(-10px);
        }
    `;

    const Dot1 = css`
        animation-delay: .25s;
    `;

    const Dot2 = css`
        animation-delay: .5s;
    `;

    const Dot3 = css`
        animation-delay: .75s;
    `;

    const Dot4 = css`
        animation-delay: 1s;
    `;

    const Dot5 = css`
        animation-delay: 1.25s;
    `;



    const Container = styled('div')`
        display: flex;
        justify-content: center;
        align-items: center;
        width: inherit;
        height: inherit;
        filter: url('#goo');
    `;

    const Dot = styled('div')`
        background: ${loaderColor(color, dProps.color)};
        width: ${size ? `${size*0.3}px` : `${dProps.size*0.3}px`};
        height: ${size ? `${size*0.3}px` : `${dProps.size*0.3}px`};
        margin: 0 5px;
        border-radius: 50%;
        transform: translateX(0);
        animation: ${Sideways} 2.5s infinite ease;
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const SVG = styled('svg')`
        width: 0;
        height: 0;
    `;

    return (
        <LoaderBox size={200} loading={loading} dPropsSize={dProps.size}>
            <SVG viewBox="0 0 0 0">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo"/>
                    </filter>
                </defs>
            </SVG>
            <Container>
                <Dot css={Dot1}></Dot>
                <Dot css={Dot2}></Dot>
                <Dot css={Dot3}></Dot>
                <Dot css={Dot4}></Dot>
                <Dot css={Dot5}></Dot>
            </Container>
        </LoaderBox>
    )
}


export default GooeyLoader2;