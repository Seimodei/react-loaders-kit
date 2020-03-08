/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface NotePadProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 30,
    duration: 2,
    colors: [Colors.Purple, Colors.Purple]
}


const NotePadLoader = (props: NotePadProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const NotePadAnim = keyframes`
        0% { 
            width : 0px; 
            opacity: 0; 
        }
        33% { 
            width : ${size ? `${size*0.56}px` : `${dProps.size*0.56}px`};
            opacity : 1; 
        }
        70% { 
            opacity : 1; 
        }
        100% {
            opacity : 0; 
        }
    `;

    const NotePad = styled('div')`
        width: inherit;
    `;

    const Binding = styled('div')`
        content : '';
        width : inherit;
        height : ${size ? `${size*0.15}px` : `${dProps.size*0.15}px`};
        border : 2px solid ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
    `;

    const Pad = styled('div')`
        width : 100%;
        height : ${size ? `${size*1.2}px` : `${dProps.size*1.2}px`};
        border : 2px solid ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        border-top : 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    const Line = styled('div')`
        width : ${size ? `${size*0.56}px` : `${dProps.size*0.56}px`};
        margin-top : ${size ? `${size*0.15}px` : `${dProps.size*0.15}px`};
        border-top : 2px solid ${colors ? `${colors[1]}` : `${dProps.colors[1]}`};
        opacity : 0;
        animation : ${NotePadAnim} ${loaderDuration(duration, dProps.duration)} infinite ease-in;
        animation-play-state: ${pauseAnim(pause)};
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <NotePad>
                <Binding></Binding>
                <Pad>
                    <Line css={css`animation-delay: 0s;`}></Line>
                    <Line css={css`animation-delay: 0.5s;`}></Line>
                    <Line css={css`animation-delay: 1s;`}></Line>
                </Pad>
            </NotePad>
        </LoaderBox>
    )
}

export default NotePadLoader;