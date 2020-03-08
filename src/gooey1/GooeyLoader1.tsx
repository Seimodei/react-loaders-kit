/** @jsx jsx */
import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, loaderColor } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface GooeyLoader1Props {
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


const GooeyLoader1 = (props: GooeyLoader1Props) => {

    const {
        loading,
        size,
        pause,
        color,
    } = props;

    const Circle = keyframes`
        50% {
            width: 25%;
            height: 25%;
        }
        100% {
            transform: rotate(360deg);
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
        position: relative;
        width: inherit;
        height: inherit;
        filter: url('#goo');
    `;

    const Dot = styled('div')`
        position: absolute;
        background: ${loaderColor(color, dProps.color)};
        width: 25%;
        height: 25%;
        border-radius: 50%;
        top:50%;
	    left:50%;
		transform-origin: -50% -50%;
        animation: ${Circle} 2.5s infinite cubic-bezier(.57, 0, .52, 1);
        animation-play-state: ${pause ? 'paused' : 'running'};
    `;

    const SVG = styled('svg')`
        width: 0;
        height: 0;
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
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


export default GooeyLoader1;