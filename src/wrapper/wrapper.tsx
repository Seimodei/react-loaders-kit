import React, { ReactNode } from 'react';
import styled from '@emotion/styled';


export interface WrapperProps {
    size: number | undefined;
    loading: boolean | undefined;
    dPropsSize: number;
    children: ReactNode;
}


const LoaderBox = (props: WrapperProps) => {
    const LoaderBox = styled('div')`
        width: ${props.size ? `${props.size}px` : `${props.dPropsSize}px`}; 
        height: ${props.size ? `${props.size}px` : `${props.dPropsSize}px`};
        display: ${props.loading ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        background-color: transparent;
        position: relative;
    `;

    return (
        <LoaderBox>
            {props.children}
        </LoaderBox>
    )
}

export default LoaderBox;