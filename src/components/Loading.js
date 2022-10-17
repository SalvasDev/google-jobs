import React from 'react'
import { Spinner } from 'reactstrap';
import styled from '@emotion/styled';

const SpinnerStyle = styled.div`
    height: 100vh;
    position: relative;
    
    .spinner {
        margin: 0 ;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .spinnerReactStrap {
        width: 10rem !important;
        height: 10rem !important;
        border: 10px solid currentColor !important;
        border-right-color: transparent !important;

    }

`;


const Loading = () => {
    return (
        <SpinnerStyle>
            <div className="spinner">
                < Spinner color='primary' className="spinnerReactStrap" />
            </div>
        </SpinnerStyle >
    )
}

export default Loading
