import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const BackDraWDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
`


function BackDraw(props) {
    return (
        ReactDom.createPortal(<BackDraWDiv onClick={props.onClick}></BackDraWDiv>, document.getElementById('Backdrop-hook'))
    )
}

export default BackDraw