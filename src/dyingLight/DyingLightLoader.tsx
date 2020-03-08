/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';

export interface DyingLightProps {
    loading: boolean;
    pause?: boolean;
    size?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 35,
    colors: [Colors.Purple, Colors.Purple]
}

const DyingLightLoader = (props: DyingLightProps) => {

    const { 
        loading, 
        pause, 
        size,
        colors
    } = props;

    const borderColors = colors ? `1px solid ${colors[0]}` : `1px solid ${dProps.colors[0]}`;

    const DyingLightAnim = keyframes`
        15% {
            transform: scale(1.6);
        }
            
        50% {
            transform: rotate(-89deg);
        }

        100% {
            transform: rotate(-90deg);
        }
    `;

    const Corners = css`
        &:before, &:after {
            display: block;
            content: "";
            width: 50%;
            height: 50%;
            position: absolute;
        }
    `;

    const DLCore = styled('div')`
        width: inherit;
        height: inherit;
        position: absolute;
        background-color: ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
    `;

    const DLContainer = styled('div')`
        position: relative;
        width: inherit;
        height: inherit;
        display: inline-block;
        animation: ${DyingLightAnim} 1s ease infinite;
        animation-play-state: ${pause ? 'paused' : 'running'};

        &:before {
            top: -5px;
            left: -5px;
            border-top: ${borderColors};
            border-left: ${borderColors};
        }

        &:after {
            top: -5px;
            right: -5px;
            border-top: ${borderColors};
            border-right: ${borderColors};
        }
    `;

    const DLSquare = styled('div')`
        &:before {
            bottom: -5px;
            left: -5px;
            border-bottom: ${borderColors};
            border-left: ${borderColors};
        }
        &:after {
            bottom: -5px;
            right: -5px;
            border-bottom: ${borderColors};
            border-right: ${borderColors};
        }
    `;


    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <DLContainer css={Corners}>
                <DLSquare css={Corners}></DLSquare>
            </DLContainer>
            <DLCore></DLCore>
        </LoaderBox>
    )
}


export default DyingLightLoader;