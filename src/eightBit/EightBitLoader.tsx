import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, pauseAnim, loaderDuration } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';



export interface EightBitProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    color?: string;
}

const dProps = {
    loading: true,
    size: 60,
    duration: 1,
    color: Colors.Purple
}


const EightBitLoader = (props: EightBitProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        color,
    } = props;

    const EightBitAnim = keyframes`
        0% {
            box-shadow: 
            0px -30px ${color ? color : dProps.color}, 
            10px -30px ${color ? color : dProps.color}, 
            20px -20px ${color ? color : dProps.color}, 
            30px -10px ${color ? color : dProps.color}, 
            30px 0px ${color ? color : dProps.color}, 
            30px 10px ${color ? color : dProps.color}, 
            20px 20px ${color ? color : dProps.color}, 
            10px 30px ${color ? color : dProps.color}, 
            0px 30px transparent, 
            -10px 30px transparent, 
            -20px 20px transparent, 
            -30px 10px transparent, 
            -30px 0px transparent, 
            -30px -10px transparent, 
            -20px -20px transparent,
            -10px -30px transparent;
        }
        6.25% {
            box-shadow: 
              0px -30px transparent, 
              10px -30px ${color ? color : dProps.color}, 
              20px -20px ${color ? color : dProps.color}, 
              30px -10px ${color ? color : dProps.color}, 
              30px 0px ${color ? color : dProps.color}, 
              30px 10px ${color ? color : dProps.color}, 
              20px 20px ${color ? color : dProps.color}, 
              10px 30px ${color ? color : dProps.color}, 
              0px 30px ${color ? color : dProps.color}, 
              -10px 30px transparent, 
              -20px 20px transparent, 
              -30px 10px transparent, 
              -30px 0px transparent, 
              -30px -10px transparent, 
              -20px -20px transparent,
              -10px -30px transparent;
          }
          12.5% {
            box-shadow: 
              0px -30px transparent, 
              10px -30px transparent, 
              20px -20px ${color ? color : dProps.color}, 
              30px -10px ${color ? color : dProps.color}, 
              30px 0px ${color ? color : dProps.color}, 
              30px 10px ${color ? color : dProps.color}, 
              20px 20px ${color ? color : dProps.color}, 
              10px 30px ${color ? color : dProps.color}, 
              0px 30px ${color ? color : dProps.color}, 
              -10px 30px ${color ? color : dProps.color}, 
              -20px 20px transparent, 
              -30px 10px transparent, 
              -30px 0px transparent, 
              -30px -10px transparent, 
              -20px -20px transparent,
              -10px -30px transparent;
          }
          18.75% {
            box-shadow: 
              0px -30px transparent, 
              10px -30px transparent, 
              20px -20px transparent, 
              30px -10px ${color ? color : dProps.color}, 
              30px 0px ${color ? color : dProps.color}, 
              30px 10px ${color ? color : dProps.color}, 
              20px 20px ${color ? color : dProps.color}, 
              10px 30px ${color ? color : dProps.color}, 
              0px 30px ${color ? color : dProps.color}, 
              -10px 30px ${color ? color : dProps.color}, 
              -20px 20px ${color ? color : dProps.color}, 
              -30px 10px transparent, 
              -30px 0px transparent, 
              -30px -10px transparent, 
              -20px -20px transparent,
              -10px -30px transparent;
          }
          25% {
            box-shadow: 
              0px -30px transparent, 
              10px -30px transparent, 
              20px -20px transparent, 
              30px -10px transparent, 
              30px 0px ${color ? color : dProps.color}, 
              30px 10px ${color ? color : dProps.color}, 
              20px 20px ${color ? color : dProps.color}, 
              10px 30px ${color ? color : dProps.color}, 
              0px 30px ${color ? color : dProps.color}, 
              -10px 30px ${color ? color : dProps.color}, 
              -20px 20px ${color ? color : dProps.color}, 
              -30px 10px ${color ? color : dProps.color}, 
              -30px 0px transparent, 
              -30px -10px transparent, 
              -20px -20px transparent,
              -10px -30px transparent;
          }
          31.25% {
            box-shadow: 
              0px -30px transparent, 
              10px -30px transparent, 
              20px -20px transparent, 
              30px -10px transparent, 
              30px 0px transparent, 
              30px 10px ${color ? color : dProps.color}, 
              20px 20px ${color ? color : dProps.color}, 
              10px 30px ${color ? color : dProps.color}, 
              0px 30px ${color ? color : dProps.color}, 
              -10px 30px ${color ? color : dProps.color}, 
              -20px 20px ${color ? color : dProps.color}, 
              -30px 10px ${color ? color : dProps.color}, 
              -30px 0px ${color ? color : dProps.color}, 
              -30px -10px transparent, 
              -20px -20px transparent,
              -10px -30px transparent;
          }
          37.5% {
            box-shadow: 
              0px -30px transparent, 
              10px -30px transparent, 
              20px -20px transparent, 
              30px -10px transparent, 
              30px 0px transparent, 
              30px 10px transparent, 
              20px 20px ${color ? color : dProps.color}, 
              10px 30px ${color ? color : dProps.color}, 
              0px 30px ${color ? color : dProps.color}, 
              -10px 30px ${color ? color : dProps.color}, 
              -20px 20px ${color ? color : dProps.color}, 
              -30px 10px ${color ? color : dProps.color}, 
              -30px 0px ${color ? color : dProps.color}, 
              -30px -10px ${color ? color : dProps.color}, 
              -20px -20px transparent,
              -10px -30px transparent;
          }
          43.75% {
            box-shadow: 
              0px -30px transparent, 
              10px -30px transparent, 
              20px -20px transparent, 
              30px -10px transparent, 
              30px 0px transparent, 
              30px 10px transparent, 
              20px 20px transparent, 
              10px 30px ${color ? color : dProps.color}, 
              0px 30px ${color ? color : dProps.color}, 
              -10px 30px ${color ? color : dProps.color}, 
              -20px 20px ${color ? color : dProps.color}, 
              -30px 10px ${color ? color : dProps.color}, 
              -30px 0px ${color ? color : dProps.color}, 
              -30px -10px ${color ? color : dProps.color}, 
              -20px -20px ${color ? color : dProps.color},
              -10px -30px transparent;
          }
          50% {
            box-shadow: 
              0px -30px transparent, 
              10px -30px transparent, 
              20px -20px transparent, 
              30px -10px transparent, 
              30px 0px transparent, 
              30px 10px transparent, 
              20px 20px transparent, 
              10px 30px transparent, 
              0px 30px ${color ? color : dProps.color}, 
              -10px 30px ${color ? color : dProps.color}, 
              -20px 20px ${color ? color : dProps.color}, 
              -30px 10px ${color ? color : dProps.color}, 
              -30px 0px ${color ? color : dProps.color}, 
              -30px -10px ${color ? color : dProps.color}, 
              -20px -20px ${color ? color : dProps.color},
              -10px -30px ${color ? color : dProps.color};
          }
          56.25% {
            box-shadow: 
              0px -30px ${color ? color : dProps.color}, 
              10px -30px transparent, 
              20px -20px transparent, 
              30px -10px transparent, 
              30px 0px transparent, 
              30px 10px transparent, 
              20px 20px transparent, 
              10px 30px transparent, 
              0px 30px transparent, 
              -10px 30px ${color ? color : dProps.color}, 
              -20px 20px ${color ? color : dProps.color}, 
              -30px 10px ${color ? color : dProps.color}, 
              -30px 0px ${color ? color : dProps.color}, 
              -30px -10px ${color ? color : dProps.color}, 
              -20px -20px ${color ? color : dProps.color},
              -10px -30px ${color ? color : dProps.color};
          }
          62.5% {
            box-shadow: 
              0px -30px ${color ? color : dProps.color}, 
              10px -30px ${color ? color : dProps.color}, 
              20px -20px transparent, 
              30px -10px transparent, 
              30px 0px transparent, 
              30px 10px transparent, 
              20px 20px transparent, 
              10px 30px transparent, 
              0px 30px transparent, 
              -10px 30px transparent, 
              -20px 20px ${color ? color : dProps.color}, 
              -30px 10px ${color ? color : dProps.color}, 
              -30px 0px ${color ? color : dProps.color}, 
              -30px -10px ${color ? color : dProps.color}, 
              -20px -20px ${color ? color : dProps.color},
              -10px -30px ${color ? color : dProps.color};
          }
          68.75% {
            box-shadow: 
              0px -30px ${color ? color : dProps.color}, 
              10px -30px ${color ? color : dProps.color}, 
              20px -20px ${color ? color : dProps.color}, 
              30px -10px transparent, 
              30px 0px transparent, 
              30px 10px transparent, 
              20px 20px transparent, 
              10px 30px transparent, 
              0px 30px transparent, 
              -10px 30px transparent, 
              -20px 20px transparent, 
              -30px 10px ${color ? color : dProps.color}, 
              -30px 0px ${color ? color : dProps.color}, 
              -30px -10px ${color ? color : dProps.color}, 
              -20px -20px ${color ? color : dProps.color},
              -10px -30px ${color ? color : dProps.color};
          }
          75% {
            box-shadow: 
              0px -30px ${color ? color : dProps.color}, 
              10px -30px ${color ? color : dProps.color}, 
              20px -20px ${color ? color : dProps.color}, 
              30px -10px ${color ? color : dProps.color}, 
              30px 0px transparent, 
              30px 10px transparent, 
              20px 20px transparent, 
              10px 30px transparent, 
              0px 30px transparent, 
              -10px 30px transparent, 
              -20px 20px transparent, 
              -30px 10px transparent, 
              -30px 0px ${color ? color : dProps.color}, 
              -30px -10px ${color ? color : dProps.color}, 
              -20px -20px ${color ? color : dProps.color},
              -10px -30px ${color ? color : dProps.color};
          }
          81.25% {
            box-shadow: 
              0px -30px ${color ? color : dProps.color}, 
              10px -30px ${color ? color : dProps.color}, 
              20px -20px ${color ? color : dProps.color}, 
              30px -10px ${color ? color : dProps.color}, 
              30px 0px ${color ? color : dProps.color}, 
              30px 10px transparent, 
              20px 20px transparent, 
              10px 30px transparent, 
              0px 30px transparent, 
              -10px 30px transparent, 
              -20px 20px transparent, 
              -30px 10px transparent, 
              -30px 0px transparent, 
              -30px -10px ${color ? color : dProps.color}, 
              -20px -20px ${color ? color : dProps.color},
              -10px -30px ${color ? color : dProps.color};
          }
          87.5% {
            box-shadow: 
              0px -30px ${color ? color : dProps.color}, 
              10px -30px ${color ? color : dProps.color}, 
              20px -20px ${color ? color : dProps.color}, 
              30px -10px ${color ? color : dProps.color}, 
              30px 0px ${color ? color : dProps.color}, 
              30px 10px ${color ? color : dProps.color}, 
              20px 20px transparent, 
              10px 30px transparent, 
              0px 30px transparent, 
              -10px 30px transparent, 
              -20px 20px transparent, 
              -30px 10px transparent, 
              -30px 0px transparent, 
              -30px -10px transparent, 
              -20px -20px ${color ? color : dProps.color},
              -10px -30px ${color ? color : dProps.color};
          }
          93.75% {
            box-shadow: 
              0px -30px ${color ? color : dProps.color}, 
              10px -30px ${color ? color : dProps.color}, 
              20px -20px ${color ? color : dProps.color}, 
              30px -10px ${color ? color : dProps.color}, 
              30px 0px ${color ? color : dProps.color}, 
              30px 10px ${color ? color : dProps.color}, 
              20px 20px ${color ? color : dProps.color}, 
              10px 30px transparent, 
              0px 30px transparent, 
              -10px 30px transparent, 
              -20px 20px transparent, 
              -30px 10px transparent, 
              -30px 0px transparent, 
              -30px -10px transparent, 
              -20px -20px transparent,
              -10px -30px ${color ? color : dProps.color};
          }
          100% {
            box-shadow: 
              0px -30px ${color ? color : dProps.color}, 
              10px -30px ${color ? color : dProps.color}, 
              20px -20px ${color ? color : dProps.color}, 
              30px -10px ${color ? color : dProps.color}, 
              30px 0px ${color ? color : dProps.color}, 
              30px 10px ${color ? color : dProps.color}, 
              20px 20px ${color ? color : dProps.color}, 
              10px 30px ${color ? color : dProps.color}, 
              0px 30px transparent, 
              -10px 30px transparent, 
              -20px 20px transparent, 
              -30px 10px transparent, 
              -30px 0px transparent, 
              -30px -10px transparent, 
              -20px -20px transparent,
              -10px -30px transparent;
          }
    `;

    const EightBit = styled('div')`
        animation: ${EightBitAnim} ${loaderDuration(duration, dProps.duration)} linear infinite;
        animation-play-state: ${pauseAnim(pause)};
        height: 10px;
        width: 10px;
        transform: scale(${size ? size/100 : dProps.size/100});
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <EightBit></EightBit>
        </LoaderBox>
    )
}

export default EightBitLoader;