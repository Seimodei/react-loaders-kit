import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors } from '../utilities/utilities';
import LoaderBox from '../wrapper/wrapper';




export interface RotatingBoxesProps {
  loading: boolean;
  pause?: boolean;
  duration?: number;
  size?: number;
  boxBorderWidth?: number;
  colors?: string[];
}


const dProps = {
  loading: true,
  duration: 3,
  size: 40,
  boxBorderWidth: 2,
  colors: [
    '#fafafa',
    '#fafafa',
    Colors.Purple,
    Colors.Purple
  ]
}

const RotatingBoxesLoader = (props: RotatingBoxesProps) => {
  const { 
    loading, 
    pause, 
    duration, 
    size, 
    boxBorderWidth, 
    colors
  } = props;

  const Box1Animation = keyframes`
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

  const Box2Animation = keyframes`
    0% {
      transform: rotate(45deg);
    }
    25% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-135deg);
    }
    75% {
      transform: rotate(-225deg);
    }
    100% {
      transform: rotate(-315deg);
    }
  `;


  const Box1 = styled('div')`
    width: inherit;
    height: inherit;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${boxBorderWidth ? `${boxBorderWidth}px` : `${dProps.boxBorderWidth}px`}; 
    background: ${colors ? `${colors[2]}` : `${dProps.colors[2]}`};
    animation: ${Box1Animation} ease-in-out 0s infinite alternate;
    animation-play-state: ${pause ? 'paused' : 'running'};
    animation-duration: ${duration ? `${duration}s` : `${dProps.duration}s`};
  `;

  const Box2 = styled('div')`
    width: inherit;
    height: inherit;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(45deg);
    padding: ${boxBorderWidth ? `${boxBorderWidth}px` : `${dProps.boxBorderWidth}px`}; 
    background: ${colors ? `${colors[3]}` : `${dProps.colors[3]}`};
    animation: ${Box2Animation} ease-in-out 0s infinite alternate;
    animation-play-state: ${pause ? 'paused' : 'running'};
    animation-duration: ${duration ? `${duration}s` : `${dProps.duration}s`};
  `;

  const BoxCore = styled('div')`
    width: 100%;
    height: 100%;
  `;
  

  return(
    <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
      <Box1>
        <BoxCore style={{ backgroundColor: colors ? `${colors[0]}` : `${dProps.colors[0]}` }}></BoxCore>
      </Box1>
      <Box2>
        <BoxCore style={{ backgroundColor: colors ? `${colors[1]}` : `${dProps.colors[1]}` }}></BoxCore>
      </Box2>
    </LoaderBox>
  )
}


export default RotatingBoxesLoader;